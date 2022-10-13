import React, { useState } from "react";

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

    if (guessStatus != "win" && count < 5) {
      answer = helpers.checkGuess(currentguess, answer);
      
      if (helpers.checkLength(currentguess) && answer && helpers.isInWordList(currentguess)) {
        setCount(count + 1);
        props.submitGuess(event, currentguess);
        let answerRenderable = helpers.convertToRender(answer);
        let newRenderArray = guessRender.concat(answerRenderable);
        setGuessRender(newRenderArray);

        if (currentguess.toLowerCase() == props.game.answer.toLowerCase()) {
          setGuessStatus("win");
        } else {
          setCurrentGuess("");

          if (count > 3) {
            setGuessStatus("lose");
          }
        }
      } else {
        alert("Guesses can only be: letters, six characters long, and in the list of possible words!");
      }
    }
  };

  if (guessStatus == "win") {
    setGuessStatus(`You won! The word was ${answer}`)
  }

  if (guessStatus == "lose") {
    setGuessStatus(`Oh no! The word was "${answer}". Better luck next time...`)
  }

  const renderThese = guessRender.map((guess) => {

    return (
      <GuessTell content={guess.props.children} class={guess.props.className} />
    );
  });

  return (
    <div className="grid-x cell">
      <h3 className="float-center game-title">
        What's the word?
        <hr/>
      </h3>
      <h4 className="game-result">
        {guessStatus}
      </h4>
      <div className="grid-x">
        {renderThese}
      </div>
        <form onSubmit={handleSubmit} className="float-center guess-form" >
        <input
          maxLength={6}
          type="text"
          name="guess"
          value={currentguess}
          onChange={handleChange}
          placeholder="enter guess here"
          className=""
        />
        <input className="button-19" type="submit" value="guess" />
      </form>

      
    </div>
  );
};

export default GuessNew;
