import './colorpalette.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorPaletteField from './components/ColorPaletteField';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.colorpalette__field').forEach((element) => {
    const props = JSON.parse(element.getAttribute('data-props') || '{}');
    const root = createRoot(element);
    root.render(<ColorPaletteField holder={element} props={props} />);
  });
});
