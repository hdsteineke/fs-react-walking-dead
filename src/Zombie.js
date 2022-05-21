import React from 'react';

export default function Zombie({ zombie }) {
  return (
    <div>
      {zombie === 'zombie1' && <span>🧟</span>}
      {zombie === 'brain' && <span>🧠</span>}
      {zombie === 'zombie2' && <span>🧟‍♀️</span>}
      {zombie === 'dumpster' && <span>🗑️</span>}
      {zombie === 'fire' && <span>🔥</span>}
    </div>
  );
}
