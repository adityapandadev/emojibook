import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤣": "laughing Hard",
  "😊": "Blushing",
  "🤔": "thinking face"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if(meaning === undefined){
           meaning = "We don't have this in our database"
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojibook</h1>
      <input onChange={emojiInputHandler}></input>
      <h3>{meaning}</h3>
    </div>
  );
}
