// node run.js lib_name

const path = require("path");
const fs = require("fs");
const child = require("child_process");

const package = process.argv[2];

const new_package = String(process.argv[2]).replace("@", "").replace("/", "-");

fs.writeFileSync(path.join(__dirname, "deps.json"), "{}");

if (!fs.existsSync(path.join(__dirname, "libs", new_package))){
    fs.mkdirSync(path.join(__dirname, "libs", new_package));
}

const package_json = JSON.parse(fs.readFileSync(path.join(__dirname, "node_modules", package, "package.json")));

if (fs.existsSync(path.join(__dirname, "node_modules", package, "README.md"))) {
    fs.copyFileSync(path.join(__dirname, "node_modules", package, "README.md"), path.join(__dirname, "libs", new_package, "README.md"));
} else if (fs.existsSync(path.join(__dirname, "node_modules", package, "readme.md"))) {
    fs.copyFileSync(path.join(__dirname, "node_modules", package, "readme.md"), path.join(__dirname, "libs", new_package, "README.md"));
} else {
    // no readme
}


console.log(child.execSync(`webpack --env type=prod --env mod=${package} --config webpack.config.prod.5.js`).toString());

console.log(child.execSync(`webpack --env type=dev --env mod=${package} --config webpack.config.prod.5.js`).toString());

let index_js = fs.readFileSync(path.join(__dirname, "libs", new_package, "index.js")).toString();
let index_min_js = fs.readFileSync(path.join(__dirname, "libs", new_package, "index.min.js")).toString();

const rewrite_modules = (js_text) => {
    let start_bracket = js_text.indexOf("[");
    let start = js_text.slice(0, start_bracket);
    let imports = js_text.slice(start_bracket, js_text.indexOf("]"));
    let rest_of_file = js_text.slice(js_text.indexOf("]"));
    imports = imports.replace(/\@/gmi, "");
    imports = imports.replace(/\//gmi, "-");
    return start + imports + rest_of_file;
}
index_js = rewrite_modules(index_js);
index_min_js = rewrite_modules(index_min_js);

fs.writeFileSync(path.join(__dirname, "libs", new_package, "index.js"), index_js);
fs.writeFileSync(path.join(__dirname, "libs", new_package, "index.min.js"), index_min_js);

const version = child.execSync(`npm view ${package} version`).toString();

const shasum = child.execSync(`shasum -b -a 512 libs/${new_package}/index.min.js | awk '{ print $1 }' | xxd -r -p | base64`);
const shasumDev = child.execSync(`shasum -b -a 512 libs/${new_package}/index.js | awk '{ print $1 }' | xxd -r -p | base64`);

try {
    fs.unlinkSync(path.join(__dirname, "libs", new_package, "lib.js"));
} catch(e) {

}
fs.writeFileSync(path.join(__dirname, "libs", new_package, "lib.json"), `
{
    "api": 1,
    "name": "${new_package}",
    "description": "${package_json.description}",
    "author": ${package_json.author == undefined ? '""' : JSON.stringify(package_json.author)},
    "version": "${version.slice(0, version.length - 1)}",
    "repo": ${JSON.stringify(package_json.repository)},
    "homepage": "${package_json.homepage}",
    "keywords": ${JSON.stringify(package_json.keywords || [])},
    "license": "${package_json.license}",
    "dependencies": ${JSON.stringify(JSON.parse(fs.readFileSync(path.join(__dirname, "deps.json")).toString()), null, 4).replace(/    /img, "        ").replace("}", "    }")},
    "files": [
        ["index.min.js", "sha512-${shasum.slice(0, shasum.length - 1)}"]
    ],
    "devFiles": [
        ["index.js", "sha512-${shasumDev.slice(0, shasum.length - 1)}"]
    ]
}
`.trim());

fs.unlinkSync(path.join(__dirname, "deps.json"), "{}");