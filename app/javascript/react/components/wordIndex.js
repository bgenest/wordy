import React, { useState, useEffect } from "react";

import WordComponent from "./WordComponent";

export const WordIndex = (props) => {
  const [wordData, setWordData] = useState([]);

  let testWord = "word";

  const getWord = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${testWord}`
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
      />
    );
  });

  useEffect(() => {
    getWord();
  }, []);

  return (
    <div class="grid-container fluid">
      <div class="grid-x">
        <div> </div>
        <h1 class=" cell title-page">Welcome to Wordy!</h1>
        <p class="cell subtitle">
          Wordy is the game that's like Wordle, but its not Wordle.
        </p>
        <br />
      </div>
      <div className="grid-x">
        <div className="cell play-button-container">
          <br/>
          <a
            className="button cell float-center "
            href="sessions/new"
            id="play-button"
          >
            Play!
          </a>
          <br />
        </div>
      </div>
      <div className="grid-x">
        <div className="cell grid-x align-middle"> {wordComponents[0]}</div>
      </div>
      <br />
    </div>
  );
};

export default WordIndex;
