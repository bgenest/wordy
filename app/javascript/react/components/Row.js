import React, { useState, useEffect } from "react";

export const Row = (props) => {
  let guess = props.guess;

  let guessArray = guess.split("");

  let letters = guessArray.map((letter) => {
    return (
      <string class="test" id="letter">
        <input size="1" placeholder={letter} id="letter"></input>
      </string>
    );
  });

  return (
    <form>
      <div className="cell">
        <div className="cell small-9">{letters}</div>
      </div>
      <br/>
    </form>
  );
};

export default Row;
