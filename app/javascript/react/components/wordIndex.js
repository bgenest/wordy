import React, { useState, useEffect } from "react";

import WordComponent from "./WordComponent";
import helpers from "./helpers";


export const WordIndex = (props) => {
  const [wordData, setWordData] = useState([]);


  let wordTile = helpers.randomword()

  const getWord = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordTile}`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseWordData = await response.json();

      console.log(responseWordData);
      setWordData(responseWordData);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const wordComponents = wordData.map((word) => {
    wordData;
    return (
      <WordComponent
        word={word.word}
        definition={word.meanings[0].definitions[0].definition}
        definition2={word.meanings[0].definitions[1].definition}
      />
    );
  });

  useEffect(() => {
    getWord();
  }, []);

  return (
    <div class="grid-container grid-margin-x fluid">
      <div class="grid-x">
        <div> </div>
        <h1 class=" cell title-page">Welcome to Wordy!</h1>
        <p class="cell subtitle">
          Wordy is the game that's like Wordle, but its not Wordle.
        </p>
        <br />
      </div>
      <div className="cell grid-x">
        <div className="play-button-container float-center">
          <br/>
          <a
            className=" button-19" role="button"
            href="sessions/new"
            id="play-button"
          >
            Play!
          </a>
        </div>
      </div>
      <br/>
      <div className="grid-x">
        <div className="cell grid-x align-middle"> {wordComponents[0]}</div>
      </div>
      <br />
    </div>
  );
};

export default WordIndex;
