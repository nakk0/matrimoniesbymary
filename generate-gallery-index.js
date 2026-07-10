const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/lib/images/gallery');
const files = fs.readdirSync(directoryPath);

// Filter out index.js and explicitly sort the filenames alphanumerically
const imageFiles = files
  .filter(file => file !== 'index.js')
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

const importStatements = imageFiles.map(file => {
  const rawName = path.basename(file, path.extname(file));
  // Force prefix and replace non-alphanumeric characters with underscores
  const variableName = 'img_' + rawName.replace(/[^a-zA-Z0-9]/g, '_');
  return `import ${variableName} from './${file}';`;
}).join('\n');

const exportArray = `export default [\n${imageFiles.map(file => {
  const rawName = path.basename(file, path.extname(file));
  const variableName = 'img_' + rawName.replace(/[^a-zA-Z0-9]/g, '_');
  // Keep the original readable name for the 'name' property, use the sanitized one for the path
  return `  { name: '${rawName}', path: ${variableName} }`;
}).join(',\n')}\n];`;

const content = `${importStatements}\n\n${exportArray}\n`;

fs.writeFileSync(path.join(directoryPath, 'index.js'), content);

console.log('index.js file has been generated with sorted images');