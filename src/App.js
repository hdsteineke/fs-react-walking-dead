import { useState } from 'react';
import './App.css';

import Sign from './Sign';
import ZombieList from './ZombieList';

function App() {
  const [zombieSize, setZombieSize] = useState(3);
  const [humanSize, setHumanSize] = useState(3);
  const [isOpen, setIsOpen] = useState(false);
  const [zombieArray, setZombieArray] = useState([
    'zombie1',
    'brain',
    'zombie2',
    'dumpster',
    'fire',
  ]);

  const zombieStyle = {
    fontSize: `${zombieSize}rem`,
  };

  const humanStyle = {
    fontSize: `${humanSize}rem`,
  };

  function handleAddZombie1() {
    setZombieArray([...zombieArray, 'zombie1']);
  }

  function handleAddBrain() {
    setZombieArray([...zombieArray, 'brain']);
  }

  function handleAddZombie2() {
    setZombieArray([...zombieArray, 'zombie2']);
  }

  function handleAddDumpster() {
    setZombieArray([...zombieArray, 'dumpster']);
  }

  function handleAddFire() {
    setZombieArray([...zombieArray, 'fire']);
  }

  const ATTACK = 1;

  return (
    <div className="App">
      <section className="fight">
        <div className="zombie">
          <p style={zombieStyle}>🧟</p>
          <button onClick={() => setZombieSize(zombieSize + ATTACK)}>
            Zombie slurps braaiiinnss
          </button>
          <button onClick={() => setHumanSize(humanSize - ATTACK)}>Zombie shrieks</button>
        </div>

        <div className="human">
          <p style={humanStyle}>🙅</p>
          <button onClick={() => setHumanSize(humanSize + ATTACK)}>Human drinks Gatorade</button>
          <button onClick={() => setZombieSize(zombieSize - ATTACK)}>
            Human does the truffle shuffle
          </button>
        </div>
      </section>

      <section className="sign">
        <Sign sign={isOpen} />
        <button onClick={() => setIsOpen(true)}>Open CDC</button>
        <button onClick={() => setIsOpen(false)}>Close CDC</button>
      </section>

      <section className="zombie-parade">
        <ZombieList zombies={zombieArray} />
        <button onClick={handleAddZombie1}>🧟</button>
        <button onClick={handleAddBrain}>🧠</button>
        <button onClick={handleAddZombie2}>🧟‍♀️</button>
        <button onClick={handleAddDumpster}>🗑️</button>
        <button onClick={handleAddFire}>🔥</button>
      </section>
    </div>
  );
}

export default App;
