import React from 'react';
import './Header.css';

export default function Header({ headliner }) {
  return (
    <header>
      <h1>{headliner}</h1>
    </header>
  );
}
