import React, {useState} from 'react';
import './App.css';
import {MenuCounter} from "./components/MenuCounter/MenuCounter";
import {MenuCounterSettings} from "./components/MenuCounterSettings/MenuCounterSettings";




function App() {
  const[show,setShow]=useState<boolean>(true)
  const callbackShow=()=>{
    setShow(!show)
  }
  return (
    <div className="App">
        {show?
        <MenuCounter callbackShow={callbackShow}/>:
        <MenuCounterSettings callbackShow={callbackShow}/>}
    </div>
  );
}

export default App;
