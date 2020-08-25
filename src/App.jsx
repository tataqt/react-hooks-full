import React, { useState, useEffect } from 'react';

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed', value);
  }, [value])
}

function useInput(initalValue) {
  const [value, setValue] = useState(initalValue);

  const onChange = event => setValue(event.target.value);

  const clear = () => setValue('')

  return {
    bind: { value, onChange },
    value,
    clear
  }
}

function App() {
  const name = useInput('');
  const lastName = useInput('');

  useLogger(name.value)

  return (
    <div className={'container pt-3'}>
      <input type="text" {...name.bind} />
      <button className="btn btn-warning" onClick={name.clear}>Очистить</button><br />
      <input type="text" {...lastName.bind} />
      <button className="btn btn-warning" onClick={lastName.clear}>Очистить</button><br />
      <hr />
      <h1>{name.value} {lastName.value}</h1>
    </div>

  );
}

export default App;
