import React, { useState, useEffect } from "react";

import Row from "./Row";

export const Grid = (props) => {
  const [guesses, setGuesses] = useState([
    "blank",
    "blank",
    "blank",
    "blank",
    "blank"
  ]);

  useEffect(() => {
  }, []);

  const guessrows = guesses?.map((guess) => {
    return (<div class="row"><Row guess={guess}/> </div>)
  });

  return (<div className="cell">
          <br/>
          {guessrows}
          <br/>
          </div>);
};

export default Grid;
