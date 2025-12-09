import fs from 'fs';
import path from 'path';

export function Sprite() {
    const spritePath = path.join(process.cwd(), 'public', 'sprite.svg');

    let spriteContent: string | null = null;

    try {
        spriteContent = fs.readFileSync(spritePath, 'utf-8');
    } catch (error) {
        console.error('Failed to load SVG sprite:', error);
        return null;
    }

    return <div dangerouslySetInnerHTML={{ __html: spriteContent }} />;
}
