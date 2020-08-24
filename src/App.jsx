import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  return (
    <div>
      <h1 style={styles}>Счетчик: {number}</h1>
      <button onClick={() => setNumber(prev => prev + 1)} className='btn btn-success'>Добавить</button>
      <button onClick={() => setColored(prev => !prev)} className='btn btn-warning'>Изменить</button>
    </div>
  );
}

export default App;
