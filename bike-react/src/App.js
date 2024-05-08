import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import TableComponent from './components/Table'
import Fetch from './components/DataFetcher';
import MyComponent from './components/MyComponent';
import axios from 'axios';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <Button onClick={incrementCount} text="Increment" />
      <Button onClick={decrementCount} text="Decrement" />
      <MyComponent></MyComponent>

    </div>
  );
};
export default App;