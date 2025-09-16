import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorPaletteField from './components/ColorPaletteField';
import './colorpalette.css';

// mount on DOM nodes
function mountAll() {
  const holders = Array.from(document.querySelectorAll('.colorpalette__field'));
  holders.forEach(holder => {
    try {
      const raw = holder.getAttribute('data-props');
      const props = raw ? JSON.parse(raw) : {};
      const root = createRoot(holder);
      root.render(<ColorPaletteField holder={holder} props={props} />);
    } catch (e) {
      console.error('Failed to mount ColorPaletteField', e);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountAll);
} else {
  mountAll();
}
