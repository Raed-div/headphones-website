const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'src/assets/images');
const files = fs.readdirSync(imagesDir);

console.log(`Searching for PNGs in ${imagesDir}...`);

files.forEach(file => {
    if (file.endsWith('.png')) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));

        sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(info => {
                console.log(`Converted: ${file} -> ${path.basename(outputPath)} (${info.size} bytes)`);
            })
            .catch(err => {
                console.error(`Error converting ${file}:`, err);
            });
    }
});
