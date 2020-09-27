import React, { useState } from 'react';
import './App.css';
import Luces from './luces/luces'



function App() {
  return (
      <div>
    <div className="palosemaforo"></div>
    <div className="semaforo">
      <Luces></Luces>
    </div>
    </div>
  );
}

export default App;
