import React, { useState, useEffect } from "react";

import helpers from "./helpers";
import GuessTell from "./GuessTell";
import WordComponent from "./WordComponent";

export const GuessNew = (props) => {
  const [currentguess, setCurrentGuess] = useState([]);
  const [guessStatus, setGuessStatus] = useState([]);
  const [guessRender, setGuessRender] = useState([]);
  const [count, setCount] = useState(0);
  const [wordData, setWordData] = useState([]);

  const handleChange = (event) => {
    setCurrentGuess(event.currentTarget.value);
  };

  useEffect(() => {
    getWord();
  }, []);

  let answer;
  if (props.game.answer != undefined) {
    answer = props.game.answer;
  }
  const handleSubmit = (event) => {
    event.preventDefault(event);

    console.log(guessStatus);

    if (guessStatus != "win" && count < 5) {
      answer = helpers.checkGuess(currentguess, answer);

      if (helpers.checkLength(currentguess)) {
        setCount(count + 1);
        props.submitGuess(event, answer);
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
        alert("Guessses can only contain letters, and be six characters long!");
      }
    }
  };

  const getWord = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${answer}`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseWordData = await response.json();
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
        phonetic={word.phonetic}
        definition={word.meanings[0].definitions[0].definition}
        definition2={word.meanings[0].definitions[1].definition}
      />
    );
  });
  if (guessStatus == "win") {
    alert(`You won! The word was ${answer}`);
  }

  if (guessStatus == "lose") {
    alert(`No more guesses! The answer was ${answer}`);
  }

  const renderThese = guessRender.map((guess) => {
    return (
      <GuessTell content={guess.props.children} class={guess.props.class} />
    );
  });

  return (
    <div className="grid-x cell">
      <h3 class="">{guessStatus}</h3>
      <div className="grid-x">{renderThese}</div>
      <br />
        {wordComponents}
      <div>
      </div>

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
