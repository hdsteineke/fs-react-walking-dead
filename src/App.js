import { useState } from 'react';
import './App.css';
import backgroundImg from './background.png';

import Sign from './Sign';
import ZombieList from './ZombieList';
import Header from './Header/Header';

function App() {
  const [zombieSize, setZombieSize] = useState(3);
  const [humanSize, setHumanSize] = useState(3);
  const [isOpen, setIsOpen] = useState(false);
  const [zombieParade, setzombieParade] = useState([
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
    setzombieParade([...zombieParade, 'zombie1']);
  }

  function handleAddBrain() {
    setzombieParade([...zombieParade, 'brain']);
  }

  function handleAddZombie2() {
    setzombieParade([...zombieParade, 'zombie2']);
  }

  function handleAddDumpster() {
    setzombieParade([...zombieParade, 'dumpster']);
  }

  function handleAddFire() {
    setzombieParade([...zombieParade, 'fire']);
  }

  const ATTACK = 1;

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Header headliner="BREAKING NEWS!!! ZOMBIE OUTBREAK!!!" />
      <section className="fight">
        <div className="zombie">
          <img id="zombie" src="./images/zombie.png" />
          <button onClick={() => setZombieSize(zombieSize + ATTACK)}>
            Zombie slurps braaiiinnss
          </button>
          <button onClick={() => setHumanSize(humanSize - ATTACK)}>Zombie shrieks</button>
        </div>

        <div className="human">
          <img id="human" src="./images/human.png" />
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
        <ZombieList zombies={zombieParade} />
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
