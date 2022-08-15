import React, { useState, useEffect } from "react";
import WordComponent from "./WordComponent";

export const wordIndex = (props) => {
  const [wordData, setWordData] = useState([]);

  let testWord = "east";

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
    <div class="grid-container grid-padding-x">
      <br/>
      <h1 class=" cell title-page">Welcome to Wordy!</h1>
      <p class="cell subtitle">
        Wordy is the game that's like Wordle, but its not Wordle.
      </p>
      <br/>
      <div class="cell">
        <a class="cell button" href="game_sessions/new" id="play-button">
          Play!
        </a>
      </div>
      <br/>
      {wordComponents}
    </div>
  );
};

export default wordIndex;
