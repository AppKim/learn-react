import { useState } from 'react';

const Bulb = () => {
  const [enabled, setEnabled] = useState(false);
  const [color, setColor] = useState('gray');
  const switchBulb = () => {
    setEnabled(!enabled);
    setColor(!enabled ? 'orange' : 'gray');
    console.log(enabled);
  };

  return (
    <div>
      <h1 style={{ backgroundColor: color }}>{enabled ? 'ON' : 'OFF'}</h1>
      <button onClick={switchBulb}>{enabled ? '끄기' : '켜기'}</button>
    </div>
  );
};

export default Bulb;
