// Inserts the server-rendered page into dist/index.html after `vite build`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const serverDir = path.join(root, 'dist-server');
const indexFile = path.join(root, 'dist', 'index.html');

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);
const template = fs.readFileSync(indexFile, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}
fs.writeFileSync(indexFile, template.replace(placeholder, `<div id="root">${render()}</div>`));
fs.rmSync(serverDir, { recursive: true, force: true });
console.log('prerender: wrote dist/index.html');
