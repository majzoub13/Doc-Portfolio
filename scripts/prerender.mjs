// Bakes the rendered page into dist/index.html so all text, links and images
// are in the HTML without JavaScript (and for crawlers). The client then hydrates it.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const { render } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href);

const file = `${root}dist/index.html`;
const html = readFileSync(file, 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('prerender: placeholder missing from dist/index.html');
writeFileSync(file, html.replace('<!--app-html-->', render()));
rmSync(`${root}dist-ssr`, { recursive: true, force: true });
console.log('prerender: dist/index.html written');
