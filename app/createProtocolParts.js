const fsp = require('fs').promises;
const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const output1 = "../Javascript/protocolParts.js"
const output2 = "../Javascript/template.js"

//protocolParts.js
try {
    if (fs.existsSync(output1)) {
        fs.unlink(output1, (err) => {
            if (err) {
                throw err;
            }
            console.log("protocolParts.js is deleted. now recreate");
        });
    }
} catch (err) {
    console.error(err)
}

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
        await fsp.appendFile(output1, `'` + string.replace(/\\n/g, '').trim().replace(/\s+/g, ' ').trim() + `',`);
        resolve("check");
    });

}
async function createProtokollPartsJS() {
    await fsp.appendFile(output1, `let protocolParts = [`);
    let htmls = await createDataArray();
    //console.log(htmls)
    for (let i = 0; i < htmls.length; i++) {
        const html = htmls[i];
        const dom = new JSDOM(html);
        let title = dom.window.document.querySelector("head > title").textContent;
        let fields = dom.window.document.querySelectorAll("fieldset");
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            if (!field.querySelector("legend").textContent.includes("Literaturhinweise")) {
                let part = {
                    thema: title,
                    headline: field.querySelector("legend").textContent,
                    experiment: field.querySelector("legend").querySelector("h4").dataset.experiment,
                    id: field.querySelector("legend").querySelector("h4").id,
                    part: field.querySelector("legend").querySelector("h4").dataset.part,
                    points: field.querySelector("legend").querySelector("h4").dataset.points,
                    html: field.outerHTML.replace(/"/g, 'xxx')
                }
                //console.log(JSON.stringify(part))

                writeInFile(JSON.stringify(part));
            }
        }
    }
    await fsp.appendFile(output1, `];`);
}

createProtokollPartsJS();

//template.js
try {
    if (fs.existsSync(output2)) {
        fs.unlink(output2, (err) => {
            if (err) {
                throw err;
            }
            console.log("template.js is deleted. now recreate");
        });
    }
} catch (err) {
    console.error(err)
}

async function createTemplateJS() {
    const data = await fsp.readFile("../Aufg_NeuÜberarbeitet.html");
    await fsp.appendFile(output2, `let template = '` + data.toString().replace(/\\n/g, '').trim().replace(/\s+/g, ' ').trim() + `'`);
}

createTemplateJS();