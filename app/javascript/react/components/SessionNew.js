import React, { useState, useEffect } from "react";

import GuessNew from "./GuessNew";
import GuessTell from "./GuessTell";

export const SessionNew = (props) => {
  const [game, setGame] = useState([]);
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  const submitGuess = (event, formPayload) => {
    let array = guesses.concat(formPayload);
    event.preventDefault();
    setGuesses(array);
  };

  const getGames = async () => {
    try {
      const response = await fetch(`/api/v1/games/1`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const gameData = await response.json();
      setGame(gameData);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };



  return (
    <div className="game-card-container float-center">
      <h1 className="title">Wordy </h1>
      <h5 className="subtitle"> Guesses can only be 6 characters long. Good Luck!</h5>
      <div className="grid-x grid-margin-x">
        <div className="new-game-card float-center">
          <div className="float-center">
            <GuessNew game={game} submitGuess={submitGuess} />
          </div>
          <br />
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default SessionNew;
