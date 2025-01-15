// src/App.js
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';

const App = () => {
  return (
    <div>
      <Greeting name="React Developer" />
      <Counter />
      <DataFetcher />
    </div>
  );
};

export default App;
