import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [likesCount, setLikesCount] = useState(0)

  function addLike(){
    setLikesCount(likesCount + 1)
  }
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {likesCount}</p>
      <button onClick={addLike}>Like</button>
    </div>
  );
};

export default App;
