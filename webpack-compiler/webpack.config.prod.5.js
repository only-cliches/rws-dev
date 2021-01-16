const path = require("path");
const fs = require("fs");
const child = require("child_process");
const webpack = require('webpack');

// npm view carbon-components version
// shasum -b -a 512 libs/carbon-components/index.min.js | awk '{ print $1 }' | xxd -r -p | base64

module.exports = env => {


    const production = env.type == "prod" ? true : false;

    const module_name = env.mod;

    const package_file = JSON.parse(fs.readFileSync(path.join(__dirname, `/node_modules/${module_name}/package.json`)).toString());

    const new_package = String(module_name).replace("@", "").replace("/", "-");

    return {
        mode: production ? "production" : "development",
        entry: path.join(__dirname, `/node_modules/${module_name}/${package_file.main || "index.js"}`),
        output: {
            library: new_package,
            libraryTarget: 'amd',
            path: path.resolve(__dirname, 'libs', new_package),
            filename: `index${production ? ".min": ""}.js`
        },
        devtool: false,
        node: false,
        optimization: {
            minimize: production
        },
        externals: [
            function({ context, request }, callback) {

                const paths = ["../", "./", "/"].map(p => request.indexOf(p));

                const depdency = JSON.parse((() => {
                    try {
                        return fs.readFileSync("deps.json");
                    } catch (e) {
                        return "{}";
                    }
                })());

                const base_req = (() => {
                    let base = request.split("/")[0];
                    if (base[0] == "@") {
                        return base + "/" + request.split("/")[1];
                    } else {
                        return base;
                    }
                })();

                const is_deep_path = (() => {

                    const slash_count = request.split("").filter((val) => val === "/").length;

                    if (request[0] == "@") {
                        return slash_count > 1;
                    } else {
                        return slash_count > 0;
                    }
                })();


                if (paths.indexOf(0) === -1 && is_deep_path == false && request.indexOf("!!webpack") == -1) { // not a local file
                    
                    const new_package = base_req.replace("@", "").replace("/", "-");

                    if (!depdency[base_req]) {
                        try {
                            const version = package_file.dependencies[base_req];
                            depdency[new_package] = version;
                            fs.writeFileSync("deps.json", JSON.stringify(depdency, null, 4));
                        } catch (e) {
                            const package = JSON.parse(fs.readFileSync(path.join(__dirname, "node_modules", base_req, "package.json")));
                            const version = package.version;    
                            depdency[new_package] = version;
                            fs.writeFileSync("deps.json", JSON.stringify(depdency, null, 4));
                        }
                    }

                    return callback(null, 'amd ' + request);
                }

                // Continue without externalizing the import
                callback();
            },
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ["@babel/plugin-proposal-class-properties"]
                        }
                    }
                }
            ]
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: production ? 'production' : 'development',
                DEBUG: false
            })
        ]
    }
};