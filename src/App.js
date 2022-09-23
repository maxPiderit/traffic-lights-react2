import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [color, setColor] = useState('');

  function toggle(e) {
    setColor(e.target.value)
  }

  return (
    <div className="app">
      <div className='top-lights'></div>
      <div className='body-lights'>
        <button value='red' className={'red-light ' + ((color === 'red') ? 'active-red' : '')} onClick={toggle}></button>
        <button value='yellow' className={'yellow-light ' + ((color === 'yellow') ? 'active-yellow' : '')} onClick={toggle}></button>
        <button value='green' className={'green-light ' + ((color === 'green') ? 'active-green' : '')} onClick={toggle}></button>
      </div>
    </div>
  );
}

export default App;
