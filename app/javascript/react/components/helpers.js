import { WORDS } from "./words";
import React from "react";

const helpers = {
  randomword() {
    let a = 0;
    let b = WORDS.length;
    let random_index = Math.floor(Math.random() * (b - a + 1)) + a;

    return WORDS[random_index];
  },
  checkGuess(guess, answer) {
    guess = guess.toLowerCase();
    answer = answer.toLowerCase();
    if (this.onlyLetters(guess)) {
        return this.newCompare(guess, answer);
    } else{
      return false
    }
  },

  newCompare(guess, answer) {

    let resultObject = {};

    for (let i = 0; i < 6; i++) {
      let letterStatus;
        if (guess[i] === answer[i]) {
          letterStatus = "correct-letter-spot";
          answer = answer.replace(guess[i],"_")
        } 
       else {
        letterStatus = "Incorrect";
      }
        let letterKey = `letter${i+1}`
        let letterID  = `class${i+1}`
        resultObject[letterKey] = guess[i] 
        resultObject[letterID] =  letterStatus
    }

    for (let i = 0; i < 6; i++) {
      let letterStatus;
      let currentLetter = guess[i]
      if (answer.includes(currentLetter) && currentLetter !== answer[i]) {
       
        answer = answer.replace(guess[i],"_")
        letterStatus = "correct-letter";
        let letterKey = `letter${i+1}`
        let letterID  = `class${i+1}`
        resultObject[letterKey] = guess[i] 
        resultObject[letterID] =  letterStatus ;
      } 
    }

    return resultObject;

  },
  checkLength(guess) {
    if (guess.length == 6) {
      return true;
    } else {
      return false;
    }
  },
  onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  },
  convertToRender(object) {
    let renderArray = [];
   
    for (let i = 0; i < 6; i++){
      renderArray.push(<div className={object[`class${i+1}`]}>{object[`letter${i+1}`]}</div>)
    }
    ;
    return renderArray;
  },
};

export default helpers;
