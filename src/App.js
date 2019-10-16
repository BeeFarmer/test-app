import React from 'react';
import {
  Counter,
  Tdlist,
  Prefix,
  Mvlist,
  Catalog,
  Stopwatch
} from './components';
import { Rcounter, Rtdlist } from './components';


function App() {
  return (
    <div>
    {/*
      <Counter />

      <p>To-do List</p>
      <Tdlist />

      <p>Telephone Prefix</p>
      <Prefix />

      <p>Movie List</p>
      <Mvlist />
    
      <p>Catalog Viewer</p>
      <Catalog />
    */}
    
    <Rcounter />

    <p>To-do List in Redux</p>
    <Rtdlist />

    </div>
  );
}

export default App;
