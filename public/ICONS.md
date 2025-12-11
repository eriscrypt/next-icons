# Icons Directory

This directory contains SVG icons that are automatically compiled into a sprite.

## Adding New Icons

1. Place your `.svg` file in this directory
2. Run `node scripts/generate-sprite.js` to regenerate the sprite
3. The icon will be available by its filename (without `.svg` extension)

## Preserving Colors (Multicolor Icons)

By default, all `fill` and `stroke` attributes are removed from icons to allow color control via CSS.

For multicolor icons that need to preserve their original colors, add this comment at the very beginning of the SVG file:

```svg
<!-- preserve-color -->
<svg ...>
```

### Examples

**Monochrome icon** (colors will be stripped):
```svg
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="..." fill="#000"/>
</svg>
```

**Multicolor icon** (colors will be preserved):
```svg
<!-- preserve-color -->
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect fill="#38B288"/>
  <path fill="white"/>
</svg>
```

## File Naming

- Use lowercase with hyphens: `my-icon.svg`
- Files starting with `_` are ignored (e.g., `_sprite.svg`)
