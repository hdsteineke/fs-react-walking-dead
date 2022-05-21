import React from 'react';
import Zombie from './Zombie.js';

export default function ZombieList({ zombies }) {
  return (
    <div className="zombieParade">
      {zombies.map((zombie, index) => (
        <Zombie zombies={zombie} key={zombie + index} zombie={zombie} />
      ))}
    </div>
  );
}
