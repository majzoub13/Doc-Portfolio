import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build pre-renders the page into index.html; hydrate it when present.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
