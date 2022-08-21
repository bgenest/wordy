import React, { useState, useEffect } from "react";

import helpers from "./helpers";
import GuessTell from "./GuessTell";

export const GuessNew = (props) => {
  const [currentguess, setCurrentGuess] = useState([]);
  const [guessStatus, setGuessStatus] = useState([]);
  const [guessRender, setGuessRender] = useState([]);
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCurrentGuess(event.currentTarget.value);
  };

  let answer;
  if (props.game.answer != undefined) {
    answer = props.game.answer;
  }

  const handleSubmit = (event) => {
    event.preventDefault(event);
    answer = helpers.checkGuess(currentguess, answer);

    if (helpers.checkLength(currentguess)) {
      setCount(count + 1);
      let answerRenderable = helpers.convertToRender(answer);
      let newRenderArray = guessRender.concat(answerRenderable);
      setGuessRender(newRenderArray);
      if (answer === true) {
        setGuessStatus("win");
      } else {
        setCurrentGuess("");
        if (count > 3) {
          setGuessStatus("lose");
        }
      }
    } else {
      alert("Guessses can only be 6 characters long!");
    }
  };

  if (guessStatus == "win") {
    alert(`You won! The word was ${answer}`);
  }

  if (guessStatus == "lose") {
    alert(`No more guesses! The answer was ${answer}`);
  }

  const renderThese = guessRender.map((guess) => {
    guessRender;
    return (
      <GuessTell content={guess.props.children.i} class={guess.props.class} />
    );
  });

  return (
    <div className="grid-x cell">
      <div className="grid-x">{renderThese}</div>
      <br />

      <form onSubmit={handleSubmit} className="float-center guess-form">
        <input
          maxLength={6}
          type="text"
          name="guess"
          value={currentguess}
          onChange={handleChange}
          placeholder="Guess the word!"
          className="submit-field"
        />
        <input className="aux_button button-19" type="submit" value="guess" />
      </form>
    </div>
  );
};

export default GuessNew;
