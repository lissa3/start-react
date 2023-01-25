import React from 'react';

function Slider({ value, onChange }) {
  return (
    <div>
      <h1>Current Age: {value}</h1>
      <input type="range" min={1} max={120} value={value || 50} onChange={(e) => onChange && onChange(e.target.value)} />
    </div>
  );
}

// Don't change the export
export { Slider };