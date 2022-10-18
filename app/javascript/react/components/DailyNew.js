import React, { useState, useEffect } from "react";

import GuessNew from "./GuessNew";

export const SessionNew = (props) => {
  const [game, setGame] = useState([]);
  const [errorMessage, setErrorMessages] = useState([])

  useEffect(() => {
    getGames();
    createSession();
  }, []);

  const getGames = async () => {
    try {
      const response = await fetch(`/api/v1/games/99999`);
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

  const createSession = async (event) => {
    event.preventDefault();
    let gameObject = {}
    gameObject["game"] = game
    try {
      const response = await fetch(`/api/v1/sessions/`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameObject),
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        setErrorMessages(errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log("error in fetch:", error);
    }
  };
  
  const submitGuess = async (event, formPayload) => {
    event.preventDefault();
    formPayload = {'word': formPayload }
    formPayload["game"] = game
    try {
      const response = await fetch(`/api/v1/guesses/`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });
      
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        setErrorMessages(errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log("error in fetch:", error);
    }
  };

  return (
    <div className="game-card-container float-center">

      <br />
      <br />
      <div className="grid-container tile-container">
        <div className="grid-x grid-padding-x grid-padding-y word-tile">
          <div className="cell card">
             <h1 className="float-center"id="gametype">Daily Game</h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="new-game-card">
          <div className="">
            <GuessNew game={game} submitGuess={submitGuess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionNew;
