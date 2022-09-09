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
    debugger
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
      let letterStatus = "";

      let letterPosition = answer.indexOf(guess[i]);
      if (letterPosition === -1) {
        letterStatus = "Incorrect";
      } else {
        if (guess[i] === answer[i]) {
          letterStatus = "correct-letter-spot";
        } else {
          letterStatus = "correct-letter";
        }
      }
      let letterKey = `letter${i+1}`
      let letterID  = `class${i+1}`
      resultObject[letterKey] = guess[i] 
      resultObject[letterID] =  letterStatus ;
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
   
    renderArray.push(<div className={object[`class1`]}>{object["letter1"]}</div>);
    renderArray.push(<div className={object[`class2`]}>{object["letter2"]}</div>);
    renderArray.push(<div className={object[`class3`]}>{object["letter3"]}</div>);
    renderArray.push(<div className={object[`class4`]}>{object["letter4"]}</div>);
    renderArray.push(<div className={object[`class5`]}>{object["letter5"]}</div>);
    renderArray.push(<div className={object[`class6`]}>{object["letter6"]}</div>);
  
    return renderArray;
  },
};

export default helpers;
