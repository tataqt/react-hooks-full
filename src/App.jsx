import React, { useState, useMemo, useEffect } from 'react';

function complexComputed(number) {
  let i = 0;
  while (i < 1000000000) i++
  return number * 2
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => complexComputed(number), [number]);
  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  useEffect(() => {
    console.log('Styles changed');
  }, [styles])

  return (
    <>
      <h1 style={styles}>Счетчик: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)} className='btn btn-success'>Добавить</button>
      <button onClick={() => setNumber(prev => prev - 1)} className='btn btn-danger'>Убрать</button>
      <button onClick={() => setColored(prev => !prev)} className='btn btn-warning'>Изменить</button>
    </>
  );
}

export default App;