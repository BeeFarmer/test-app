import React from 'react';
import {
  Counter,
  Tdlist
} from './components';


function App() {
  return (
    <div>
      <Counter />

      <p>To-do List</p>
      <Tdlist />
    </div>
  );
}

export default App;
