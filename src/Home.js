import React from 'react';
import { useState } from 'react';
import './App.css';
import backgroundImg from './background.png';
import { BrowserRouter as Router,
  Switch, 
  NavLink,
  Route,
  Redirect, 
} from 'react-router-dom';
import { Link } from 'react-router-dom';

import Sign from './Sign';
import ZombieList from './ZombieList';
import Header from './Header/Header';
import CustomButton from './CustomButton';

export default function Home() {
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
          <CustomButton className="fight-button" onClick={handleZombieGrowth}>
          Zombie slurps braaiiinnss
          </CustomButton>
          <CustomButton className="fight-button" onClick={handleZombieAttack}>Zombie shrieks</CustomButton>
        </div>

        <div className="zombie">
          <img id="human" src="./images/human.png" width={humanSize * 10} />
          <CustomButton className="fight-button" onClick={handleHumanGrowth}>Human drinks Gatorade</CustomButton>
          <CustomButton className="fight-button" onClick={handleHumanAttack}>
          Human does the truffle shuffle
          </CustomButton>
        </div>
      </section>

      <section className="sign">
        <Sign sign={isOpen} />
        <CustomButton onClick={() => setIsOpen(true)}>Open CDC</CustomButton>
        <CustomButton onClick={() => setIsOpen(false)}>Close CDC</CustomButton>
      </section>

      <section className="zombie-parade">
        <ZombieList zombies={zombieParade} />
        <CustomButton onClick={handleAddZombie1}>🧟</CustomButton>
        <CustomButton onClick={handleAddBrain}>🧠</CustomButton>
        <CustomButton onClick={handleAddZombie2}>🧟‍♀️</CustomButton>
        <CustomButton onClick={handleAddDumpster}>🗑️</CustomButton>
        <CustomButton onClick={handleAddFire}>🔥</CustomButton>
      </section>
    </div>

  );
}
