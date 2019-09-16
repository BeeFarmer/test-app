import React from 'react';
import {
  Counter,
  Tdlist,
  Prefix,
  Mvlist
} from './components';


function App() {
  return (
    <div>
      <Counter />

      <p>To-do List</p>
      <Tdlist />

      <p>Telephone Prefix</p>
      <Prefix />

      <p>Movie List</p>
      <Mvlist />
    </div>
  );
}

export default App;
