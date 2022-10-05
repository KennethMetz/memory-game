import React, { useState } from "react";
import uniqid from "uniqid";

export default function Game() {
  const [tiles, setTiles] = useState([
    { name: "a", image: 1, id: uniqid() },
    { name: "b", image: 2, id: uniqid() },
    { name: "c", image: 3, id: uniqid() },
    { name: "d", image: 4, id: uniqid() },
    { name: "e", image: 5, id: uniqid() },
    { name: "f", image: 6, id: uniqid() },
    { name: "g", image: 7, id: uniqid() },
    { name: "h", image: 8, id: uniqid() },
    { name: "i", image: 9, id: uniqid() },
    { name: "j", image: 10, id: uniqid() },
    { name: "k", image: 11, id: uniqid() },
    { name: "l", image: 12, id: uniqid() },
  ]);

  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function shuffleArray() {
    for (let i = tiles.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tiles[i];
      tiles[i] = tiles[j];
      tiles[j] = temp;
    }
    setTiles([...tiles]);
  }

  function resetGame() {
    setScore(0);
    setClicked([]);
  }

  function clickTile(item) {
    if (clicked.includes(item.name)) {
      resetGame();
    } else {
      setClicked([...clicked, item.name]);
      shuffleArray();
      let newScore = score + 1;
      setScore(newScore);
      if (newScore >= highScore) {
        setHighScore(newScore);
      }
      if (newScore === 12) {
        alert(
          "CONGRATULATIONS YOU'VE SUCCESSFULLY SELECTED ALL 12 CHARACTERS!!!"
        );
        resetGame();
      }
    }
    shuffleArray();
  }

  return (
    <div>
      <div id="header">SPONGEBOB MEMORY GAME</div>
      <div id="instructions">
        Try to click all twelve characters in a row without repeating!
      </div>
      <div id="tiles">
        {tiles.map((item, index) => {
          return (
            <div
              key={item.id}
              id={item.name}
              class="card"
              onClick={(e) => {
                clickTile(item, e);
              }}
            ></div>
          );
        })}
      </div>
      <div id="score">SCORE : {score}</div>
      <div id="hiScore">HIGH SCORE : {highScore}</div>
    </div>
  );
}
