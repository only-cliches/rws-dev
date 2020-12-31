const { exec } = require("child_process");
const fs = require('fs');
const path = require("path");

exec("ls -1", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    
    const libs = stdout.split(/\n/gmi).filter(f => f && f.length).map(f => f.trim());

    let paths = {};
    let sri = {};

    libs.forEach((lib) => {
        if (lib == "libs" || lib == "libs.js" || lib == "require.min.js") return;
        paths[lib] = `/static/libs/${lib}/index.min`;

        const lib_json = JSON.parse(fs.readFileSync(path.join(__dirname, lib, "lib.json")).toString());
        lib_json.devFiles.forEach((file) => {
            if (file[0] == "index.min.js") {
                sri[lib] = file[1];
            }
        });
    });
/*
    console.log(JSON.stringify(paths));
    console.log(JSON.stringify(sri));
*/
    console.log(`
        require.config({
            paths: ${JSON.stringify(paths)},
            onNodeCreated: function(node, config, module, path) {

                var sri = ${JSON.stringify(sri)};

                if (sri[module]) {
                    node.setAttribute('integrity', sri[module]);
                    node.setAttribute('crossorigin', 'anonymous');
                }
            }
        });
    `.trim());
});