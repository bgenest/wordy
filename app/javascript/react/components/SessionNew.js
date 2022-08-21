import React, { useState, useEffect } from "react";

import GuessNew from "./GuessNew";

export const SessionNew = (props) => {
  const [game, setGame] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [errorMessages, setErrorMessages] = useState("");

  useEffect(() => {
    getGames();
  }, []);


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
      <br/>
      <h1 className="title">Wordy </h1>
      <h5 className="subtitle">
        {" "}
        Guesses can only be 6 characters long. Good Luck!
      </h5>
      <hr/>
      <div className="">
        <div className="new-game-card">
          <div className="">
            <GuessNew game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionNew;
