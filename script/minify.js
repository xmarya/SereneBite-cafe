const fs = require('fs');
const {minify} = require('terser');

const originalFolder = './script';
const minifiedFolder = './script/min-script';

if (!fs.existsSync(minifiedFolder)) {
    fs.mkdirSync(minifiedFolder);
}

fs.readdirSync(originalFolder).forEach((file) => {
    if (file.endsWith('.js')) {
        const filePath = path.join(originalFolder, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        const minifiedCode = terser.minify(fileContent).code;

        const minifiedFileName = `${path.parse(file).name}-min.js`;
        const outputPath = path.join(minifiedFolder, minifiedFileName);

        fs.writeFileSync(outputPath, minifiedCode);

        console.log(`Minified ${file} to ${minifiedFileName}`);
    }
});
