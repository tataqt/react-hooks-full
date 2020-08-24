import React, { useState, useCallback } from 'react';
import { ItemsList } from './ItemsList';

function App() {
  const [number, setNumber] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromApi = useCallback(() => {
    return new Array(number).fill('').map((_, i) => `Элемент${i + 1}`)
  }, [number])

  return (
    <div>
      <h1 style={styles}>Счетчик: {number}</h1>
      <button onClick={() => setNumber(prev => prev + 1)} className='btn btn-success'>Добавить</button>
      <button onClick={() => setColored(prev => !prev)} className='btn btn-warning'>Изменить</button>

      <ItemsList getItems={generateItemsFromApi} />
    </div>
  );
}

export default App;
