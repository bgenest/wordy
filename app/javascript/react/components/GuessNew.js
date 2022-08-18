import React, { useState, useEffect } from "react";

export const GuessNew = (props) => {
  const [currentguess, setCurrentGuess] = useState([]);

  const handleChange = (event) => {
    setCurrentGuess(event.currentTarget.value);
  };

  const handleSubmit = (event) => {

    let formPayload = {guess: currentguess };
    props.submitGuess(event, formPayload);
    setCurrentGuess("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="guess"
          value={currentguess}
          onChange={handleChange}
          placeholder="Guess the word!"
        />
        <input className="aux_button" type="submit" value="submit guess" />
      </form>
    </div>
  );
};

export default GuessNew;
