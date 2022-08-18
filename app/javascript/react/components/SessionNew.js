import React, { useState, useEffect } from "react";

import GuessNew from "./GuessNew";

export const SessionNew = (props) => {
  const[game, setGame] = useState([])
  const [guesses, setGuesses] = useState([]);

  const submitGuess = (event, formPayload) => {
    let array = guesses.concat(formPayload)
    event.preventDefault()
    setGuesses(array);
  };

  let guessList = guesses.map((word)=>{
    return<p>{word.guess}</p>
  })

  return (
    <div className="game-card-container float-center">
      <h1 className="title">Wordy </h1>
      <ul>{guessList}</ul>
      <div className="grid-x grid-margin-x">
        <div className="card small-auto">
          <div className="">
            <GuessNew submitGuess={submitGuess} />
          </div>
          <br/>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default SessionNew;
