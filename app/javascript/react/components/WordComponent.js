import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export const WordComponent = (props) => {

  return (
    <div className="grid-container tile-container">
      <div className="grid-x grid-padding-x grid-padding-y word-tile">
        <div className="cell card">
          <div className="card-section">
            <h3 className="word-word">
              <FontAwesomeIcon icon={faLightbulb} /> {props.word}{" "}
              {props.phonetic}
            </h3>
            <hr />
            <ul>
              <li className="word-definition">"{props.definition}"</li>
            </ul>
            <div>
              <p id="credits"> Powered by https://dictionaryapi.dev/ </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordComponent;
