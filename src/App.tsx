import React, { useState } from 'react';
import './App.css';
import Test from './Test';

interface Type {
  value: number;
}

function App() {
  const [data, SetData] = useState("");
  const [count, SetCount] = useState<Type>({ value: 0 });

  return (
    <div className="App">
      <input type='text' onChange={(e) => SetData(e.target.value)} />
      <Test data={data} value={count} />
      <button onClick={() => SetCount({ value: count.value + 1 })}>Click Me!</button>
    </div>
  );
}

export default App;
