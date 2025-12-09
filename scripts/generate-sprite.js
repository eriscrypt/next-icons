import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../public/icons');
const outputPath = path.join(__dirname, '../public/sprite.svg');

// Read all SVG files from icons directory
const iconFiles = fs.readdirSync(iconsDir).filter((file) => file.endsWith('.svg'));

// SVG sprite beginning
let spriteContent = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;">\n';

iconFiles.forEach((file) => {
    const iconName = path.basename(file, '.svg');
    const iconPath = path.join(iconsDir, file);
    const iconContent = fs.readFileSync(iconPath, 'utf-8');

    // Extract SVG content (without svg tag)
    const svgMatch = iconContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);

    if (svgMatch) {
        let innerContent = svgMatch[1];
        const viewBoxMatch = iconContent.match(/viewBox="([^"]*)"/i);
        const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

        // Remove fill and stroke attributes to allow color control from outside
        innerContent = innerContent.replace(/\s+fill="[^"]*"/gi, '');
        innerContent = innerContent.replace(/\s+stroke="[^"]*"/gi, '');

        // Create symbol for each icon
        spriteContent += `  <symbol id="${iconName}" viewBox="${viewBox}">\n`;
        spriteContent += `    ${innerContent.trim()}\n`;
        spriteContent += `  </symbol>\n`;
    }
});

spriteContent += '</svg>';

// Save sprite
fs.writeFileSync(outputPath, spriteContent);

console.log(`✅ SVG sprite generated with ${iconFiles.length} icons`);
console.log(`📁 Output: ${outputPath}`);
