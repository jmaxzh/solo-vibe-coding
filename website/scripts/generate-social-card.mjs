import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';

await sharp(fileURLToPath(new URL('../public/social-card.svg', import.meta.url)))
  .png({ compressionLevel: 9 })
  .toFile(fileURLToPath(new URL('../public/social-card.png', import.meta.url)));
console.log('Generated public/social-card.png from public/social-card.svg.');

await mkdir(new URL('../public/licenses/', import.meta.url), { recursive: true });
for (const [packageName, name] of [['@fontsource-variable/manrope', 'manrope'], ['@fontsource/ibm-plex-mono', 'ibm-plex-mono']]) {
  await copyFile(new URL(`../node_modules/${packageName}/LICENSE`, import.meta.url), new URL(`../public/licenses/${name}-OFL.txt`, import.meta.url));
}
console.log('Copied font licenses for distribution with the self-hosted font files.');
const decimalLicense = await readFile(new URL('../node_modules/big.js/LICENCE.md', import.meta.url), 'utf8');
await writeFile(new URL('../public/licenses/big-js-MIT.txt', import.meta.url), decimalLicense.replaceAll('\r\n', '\n').trimEnd() + '\n');
console.log('Copied the decimal arithmetic library license.');
