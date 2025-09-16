import React, { useState, useEffect } from 'react';

const ColorButton = ({ color, active, onClick }) => {
  const handleClick = () => {
    onClick(color);
    // Copy color code to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color).catch(() => {
        console.warn('Copy to clipboard failed');
      });
    }
  };

  return (
    <button
      type="button"
      className={`colorpalette__swatch ${active ? 'active' : ''}`}
      title={`Click to copy ${color}`}
      onClick={handleClick}
      style={{ backgroundColor: color }}
    />
  );
};


export default function ColorPaletteField({ holder, props }) {
  const { name, value: initialValue, palette } = props;
  const [value, setValue] = useState(initialValue || '');
  const [copied, setCopied] = useState(null);

  const handleClick = () => {
    onClick(color);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color)
        .then(() => setCopied(color))
        .catch(() => console.warn('Copy failed'));
      setTimeout(() => setCopied(null), 1000); // remove after 1s
    }
  };

  useEffect(() => {
    let input = holder.querySelector(`input[name="${name}"]`);
    if (!input) {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      holder.appendChild(input);
    }
    input.value = value || '';
  }, [value, name, holder]);

  return (
    <div className="colorpalette react">
      <div className="colorpalette__list">
        {palette.map(c => (
          <ColorButton
            key={c}
            color={c}
            active={c === value}
            onClick={setValue}
          />
        ))}
      </div>
      <div className="colorpalette__controls">
        <input
          type="text"
          value={value}
          placeholder="#ffffff or rgba(...)"
          onChange={e => setValue(e.target.value)}
        />
        <div
          className="colorpalette__preview"
          style={{
            backgroundColor: value || 'transparent',
          }}
          title={value || 'No color selected'}
        />
      </div>
      {copied && (
        <div className="colorpalette__copied">
          Copied {copied}!
        </div>
      )}
    </div>
  );
}
