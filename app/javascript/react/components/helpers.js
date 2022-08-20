import { WORDS } from "./words";
import React from "react";



const helpers = {
  randomword(){
  let a = 0
  let b = WORDS.length
  let random_index = Math.floor(Math.random()*(b-a+1))+a

  return WORDS[random_index]
  }
  ,
  checkGuess(guess, answer) {
    guess = guess.toLowerCase();
    answer = answer.toLowerCase();
    if (guess != answer) {
      return this.newCompare(guess, answer)
    } else {
      return true;
    }
  },
  newCompare(guess, answer) {
    let resultObject = {}
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
      resultObject[i]= {i : guess[i], status: letterStatus }
    }
  return resultObject
  },
  checkLength(guess){
    if (guess.length == 6){
      return true
    } else{
      return false
    }
  },
  convertToRender(object){
    let values = Object.values(object) 
    let renderArray = []
    values.forEach((value) => {
      renderArray.push(<div class={value.status}>{value}</div>)
    });
    return renderArray
  }

};

export default helpers;
