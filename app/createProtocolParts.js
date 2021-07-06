const fsp = require('fs').promises;
const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const output = "../Javascript/protocolParts.js"


function fromDir(startPath, filter) {
    return new Promise(function (resolve, reject) {
        let allDocs = [];
        if (!fs.existsSync(startPath)) {
            console.log("no dir ", startPath);
            reject(allDocs);
        }

        var files = fs.readdirSync(startPath);
        for (var i = 0; i < files.length; i++) {
            var filename = path.join(startPath, files[i]);
            var stat = fs.lstatSync(filename);
            /*if (stat.isDirectory()){
                fromDir(filename,filter); //recurse
            }*/
            if (filename.indexOf(filter) >= 0) {
                allDocs.push(filename);
                console.log('-- found: ', filename);
            };
        };
        resolve(allDocs);
    });

};

async function readFile(filePath) {
    return new Promise(async function (resolve, reject) {
        try {
            let domHtmls = [];
            const data = await fsp.readFile(filePath);
            //console.log(data.toString());
            //await fsp.appendFile("file.js", `['` + data.toString().replace(/(\r\n|\n|\r)/gm, "") + `'],`);
            domHtmls.push(data.toString())
            //console.log();

            resolve(domHtmls);
            //allHTML.push(data.toString());

        } catch (error) {
            console.error(`Got an error trying to read the file: ${error.message}`);
            reject(`Got an error trying to read the file: ${error.message}`);
        }
    });

}

async function createDataArray() {
    return new Promise(async function (resolve, reject) {
        let htmls = []
        let files = await fromDir('../', '.html');
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            let r = await readFile(file)
            htmls.push(r);
        }
        //console.log(htmls)
        resolve(htmls);
    });
}
async function writeInFile(string) {
    new Promise(async function (resolve, reject) {
        await fsp.appendFile(output, `'` + string.replace(/\\n/g, '').trim().replace(/\s+/g, ' ').trim() + `',`);
        resolve("check");
    });

}
async function createJS() {
    await fsp.appendFile(output, `let protocolParts = [`);
    let htmls = await createDataArray();
    //console.log(htmls)
    for (let i = 0; i < htmls.length; i++) {
        const html = htmls[i];
        const dom = new JSDOM(html);
        let title = dom.window.document.querySelector("head > title").textContent;
        let fields = dom.window.document.querySelectorAll("fieldset");
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            let part = {
                thema: title,
                headline: field.querySelector("legend").textContent,
                html: field.outerHTML.replace(/"/g, 'xxx')
            }
            //console.log(JSON.stringify(part))

            writeInFile(JSON.stringify(part));

        }
    }
    await fsp.appendFile(output, `];`);
}

createJS();