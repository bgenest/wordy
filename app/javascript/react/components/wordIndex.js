import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import WordComponent from "./WordComponent";
import GameTypeTile from "./GameTypeTile"
import helpers from "../aux_files/helpers";


export const wordIndex = (props) => {
  const [wordData, setWordData] = useState([
    {
      word: "word",
      phonetic: "/wɜd/",
      meanings: [
        {
          definitions: [
            {
              definition:
                "The smallest unit of language that has a particular meaning and can be expressed by itself; the smallest discrete, meaningful unit of language. (contrast morpheme.)",
            },
            {
              definition: "Something like such a unit of language:",
            },
          ],
        },
      ],
    },
  ]);

  let word = helpers.randomword();

  const getWord = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
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
      />
    );
  });

  useEffect(() => {
    getWord();
  }, []);

  return (
<div className="grid-container grid-padding-x fluid">
  <div className="grid-container tile-container" id ="game-option-tile">
    <div className="grid-x grid-padding-x grid-padding-y word-tile title-card">
      <div className="cell card">
        <h1 className="cell auto title-page float-center title-card">
          Wordy
          <FontAwesomeIcon icon={faNewspaper} />
        </h1>
      <br />
      </div>
    </div>
  </div>
  <br />
  <div className= "tile-container grid-container">
    <div className="cell small-auto">
      <GameTypeTile
      url={"/games/daily"}
      title={"Daily word"}
      description={"Everyone gets the same word. Refreshed daily."}
      icon={<FontAwesomeIcon icon={faCalendar}/>}
      />
      </div>
      <div className="cell small-auto">
      <GameTypeTile
      url={"/sessions/new"}
      title={"Random word"}
      icon={<FontAwesomeIcon icon={faDice}/>}
      description={"Random word every time you play! Good for practice."}
      />
      </div>
      <div className="cell small-auto">
      <GameTypeTile
      url={"/tutorial"}
      title={"Tutorial"}
      description={"Learn how to play."}
      icon={<FontAwesomeIcon icon={faQuestion}/>}
      />
    </div>
  </div>
  <br />
  <br />
  <div className="grid-x">
    <div className="cell grid-x align-middle">
    {wordComponents[0]}
    </div>
  </div>
  <br />
</div>
  );
};

export default wordIndex;
