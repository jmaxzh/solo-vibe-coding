import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { copyFile, mkdir } from 'node:fs/promises';

await sharp(fileURLToPath(new URL('../public/social-card.svg', import.meta.url)))
  .png()
  .toFile(fileURLToPath(new URL('../public/social-card.png', import.meta.url)));
console.log('Generated public/social-card.png from public/social-card.svg.');

await mkdir(new URL('../public/licenses/', import.meta.url), { recursive: true });
for (const [packageName, name] of [['@fontsource-variable/manrope', 'manrope'], ['@fontsource/ibm-plex-mono', 'ibm-plex-mono']]) {
  await copyFile(new URL(`../node_modules/${packageName}/LICENSE`, import.meta.url), new URL(`../public/licenses/${name}-OFL.txt`, import.meta.url));
}
console.log('Copied font licenses for distribution with the self-hosted font files.');
