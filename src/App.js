import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤣": "laughing Hard",
  "😊": "Blushing",
  "🤔": "thinking face",
  "😴": "Sleeping",
  "😡": "Angry",
  "🧐": "Spying",
  "🤩": "Star-Struck",
  "🤪": "Zany Face",
  "🤐": "Zipper-Mouth Face",
  "🤫": "Shushing Face"
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
      <h2>{meaning}</h2>
      <h3>
        <strong>Click on below emoji's to know their meaning.👇</strong>
      </h3>
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
      <div style={{ marginTop: "2rem" }}>
        <a
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "black",
            padding: ".5rem",
            borderRadius: ".5rem"
          }}
          href="\"
        >
          clear output
        </a>
      </div>
    </div>
  );
}
