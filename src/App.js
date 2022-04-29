import { useState } from 'react';
import './App.css';
import backgroundImg from './background.png';

import Sign from './Sign';
import ZombieList from './ZombieList';
import Header from './Header/Header';

function App() {
  const [zombieSize, setZombieSize] = useState(11);
  const [humanSize, setHumanSize] = useState(7);
  const [isOpen, setIsOpen] = useState(false);
  const [zombieParade, setzombieParade] = useState([
    'zombie1',
    'brain',
    'zombie2',
    'dumpster',
    'fire',
  ]);
  
  const ATTACK = 1;

  function handleZombieAttack() {
    setHumanSize(humanSize - ATTACK);
  }

  function handleHumanAttack() {
    setZombieSize(zombieSize - ATTACK);
  }

  function handleZombieGrowth() {
    setZombieSize(zombieSize + ATTACK);
  }

  function handleHumanGrowth() {
    setHumanSize(humanSize + ATTACK);
  }

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


  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Header headliner="BREAKING NEWS!!! ZOMBIE OUTBREAK!!!" />
      <section className="fight">
        <div className="zombie">
          <img id="zombie" src="./images/zombie.png" width={zombieSize * 10} />
          <button className="fight-button" onClick={handleZombieGrowth}>
            Zombie slurps braaiiinnss
          </button>
          <button className="fight-button" onClick={handleZombieAttack}>Zombie shrieks</button>
        </div>

        <div className="zombie">
          <img id="human" src="./images/human.png" width={humanSize * 10} />
          <button className="fight-button" onClick={handleHumanGrowth}>Human drinks Gatorade</button>
          <button className="fight-button" onClick={handleHumanAttack}>
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
