import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Used at build time only: renders the page to HTML so it shows before JavaScript loads.
export function render() {
  return renderToString(<App />);
}
