import fs from 'fs';
import path from 'path';

export function Sprite() {
    const spritePath = path.join(process.cwd(), 'public', 'icons/_sprite.svg');
    let spriteContent: string | null = null;

    try {
        spriteContent = fs.readFileSync(spritePath, 'utf-8');
    } catch (error) {
        console.error('Failed to load SVG sprite:', error);
    }

    if (!spriteContent) {
        return null;
    }

    return <div dangerouslySetInnerHTML={{ __html: spriteContent }} />;
}
