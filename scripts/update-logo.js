const fs = require('fs');
const path = require('path');

const pngPath = path.join(__dirname, '..', 'public', 'logo.png');
const svgPath = path.join(__dirname, '..', 'public', 'logo.svg');
const svgImagesPath = path.join(__dirname, '..', 'public', 'images', 'logo.svg');

const pngBuffer = fs.readFileSync(pngPath);
const base64Data = pngBuffer.toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 512" width="1024" height="512">
  <image href="data:image/png;base64,${base64Data}" x="0" y="0" width="1024" height="512" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync(svgPath, svgContent, 'utf8');
fs.writeFileSync(svgImagesPath, svgContent, 'utf8');
console.log('Successfully updated logo.svg and logo.png with the new uploaded logo!');
