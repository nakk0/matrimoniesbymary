const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/lib/images/gallery');
const files = fs.readdirSync(directoryPath);

// Filter out index.js to avoid importing itself
const imageFiles = files.filter(file => file !== 'index.js');

const importStatements = imageFiles.map(file => {
  const variableName = path.basename(file, path.extname(file));
  return `import ${variableName} from './${file}';`;
}).join('\n');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(imageFiles);
const exportArray = `export default [\n${imageFiles.map(file => {
  const variableName = path.basename(file, path.extname(file));
  return `  { name: '${variableName}', path: ${variableName} }`;
}).join(',\n')}\n];`;

const content = `${importStatements}\n\n${exportArray}\n`;

fs.writeFileSync(path.join(directoryPath, 'index.js'), content);

console.log('index.js file has been generated');
