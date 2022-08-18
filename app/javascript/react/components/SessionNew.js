import React, { useState, useEffect } from "react";

import GuessNew from "./GuessNew";

export const SessionNew = (props) => {
  const [guesses, setGuesses] = useState([]);

  const submitGuess = (event, formPayload) => {
    setGuesses(formPayload);
  };

let guessList

if (guesses){  const guessList = guesses.map((guess)=>{
      return(
        <li>{guess}</li>
      )
  })}

  return (
    <div className="game-card-container float-center">
      <h1 className="title">Wordy </h1>
      <div className="grid-x grid-margin-x">
        <div className="card small-auto">
          <div className="">
            <GuessNew submitGuess={submitGuess} />
          </div>
          <br/>
          <ul>{guessList}</ul>
        </div>
      </div>
    </div>
  );
};

export default SessionNew;
