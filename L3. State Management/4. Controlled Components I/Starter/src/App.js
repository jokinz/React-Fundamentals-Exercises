import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const updateText = (inputValue) =>{
    setInputValue(inputValue)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" value={inputValue} onChange={(event) => updateText(event.target.value)}/>
        <p className="echo">Echo:</p>
        <p>{inputValue}</p>
      </div>
    </div>
  );
};

export default App;
