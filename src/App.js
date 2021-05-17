import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤣": "laughing Hard",
  "😊": "Blushing",
  "🤔": "thinking face",
  "😴": "Sleeping",
  "😡": "Angry",
  "🧐": "Spying"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojibook</h1>
      <input onChange={emojiInputHandler}></input>
      <h3>{meaning}</h3>
      <h4>Emojis We Know</h4>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "1.5rem", padding: ".5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
