const fs = require('fs');
const slug = require('slug');
const descriptions = require('./descriptions.json');

descriptions.forEach(description => createJavaFile(description));

function createJavaFile(description) {
    const folderName = getName(description);
    if (!fs.existsSync('./src/'  + folderName)) {
        fs.mkdirSync('./src/' + folderName);
        fs.writeFileSync('./src/' + folderName + '/Main.java', getJavaCode(folderName, description));
    }
}

function getJavaCode(folderName = '', description = '') {
    return 'package '+folderName+';\n' +
        '\n' +
        '/**\n' +
        ' * Description: '+description+'\n' +
        ' * \n' +
        ' * @author paulc\n' +
        ' *\n' +
        ' */\n' +
        'public class Main {\n' +
        '\t\n' +
        '\tpublic static void main(String[] args) {\n' +
        '\t\tnew Main();\n' +
        '\t}\n' +
        '\t\n' +
        '\tpublic Main() {\n' +
        '\t\tSystem.out.println("'+folderName+'");\n' +
        '\t}\n' +
        '}';
}

function getName(description) {
    const shortDescription = description.split('.');
    return slug(shortDescription[shortDescription.length - 1], {lower: true, replacement: '_'});
}


/*
Script video title
let descriptions = [];
document.querySelectorAll('.style-scope ytd-playlist-panel-video-renderer > a h4').forEach(e => {
    descriptions.push(e.textContent.toString().trim());
});
console.log(JSON.stringify(descriptions));
*/
