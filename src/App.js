import React from 'react';
import {
  Counter,
  Tdlist,
  Prefix
} from './components';


function App() {
  return (
    <div>
      <Counter />

      <p>To-do List</p>
      <Tdlist />

      <p>Telephone Prefix</p>
      <Prefix />
    </div>
  );
}

export default App;
