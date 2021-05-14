import React, { useState } from "react";
import "./styles.css";

// var sampleText = "Hello";

// var color = "blue";

// var userName = prompt("Enter Your Name...");
// var likeCounter = 0;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCounterValue = likeCounter + 1;
    setLikeCounter(newLikeCounterValue);
  }
  // console.log("LikeCounter", likeCounter)
  return (
    <div className="App">
      <h1>Emojibook</h1>
      {/* <h2 style={{ color: color }}>Welcome {userName}</h2> */}
      <button onClick={likeClickHandler}>Click me</button> {likeCounter}

     <p>done for now</p>
    </div>
  );
}
