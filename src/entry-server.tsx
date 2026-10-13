import { renderToString } from 'react-dom/server';
import App from './App';

// Used at build time only (scripts/prerender.mjs) to bake the page HTML into dist/index.html.
export function render(): string {
  return renderToString(<App />);
}
