import React from 'react'
import './App.css';
import Child from './Child';
import {TransProvider} from "./TransContext"

function App() {
  return (
   <TransProvider>
    <Child />
    </TransProvider>
  );
}

export default App;
