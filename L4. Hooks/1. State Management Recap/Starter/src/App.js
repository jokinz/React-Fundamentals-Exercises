import logo from "./logo.svg";
import ChatWindow from "./components/ChatWindow";
import "./App.css";
import { useState } from "react"


const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  const [messagesArray, setMessagesArray] = useState(messages)

    function handleNewMessage(username, message){
        setMessagesArray((prevMessagesArray)=>{
            return [...prevMessagesArray, 
              {
                username: username, 
                text: message
              }
            ]
        })
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <ChatWindow 
          username="Amy"
          messagesArray={messagesArray}
          handleNewMessage={handleNewMessage}
        />
        <ChatWindow 
          username="John"
          messagesArray={messagesArray}
          handleNewMessage={handleNewMessage}
        />
      </div>
    </div>
  );
};

export default App;
