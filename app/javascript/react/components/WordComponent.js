import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'




export const WordComponent = (props) => {

  console.log(props)
  return (
    <div class="grid-container">
      <div class="grid-x grid-padding-x grid-padding-y word-tile">
        <div class="cell card">
            <div class="card-section">
            <h3 class="word-word"><FontAwesomeIcon icon={faLightbulb} /> {props.word}  {props.phonetic}</h3>
            <hr/>
            <ul>
              <li class="word-definition">"{props.definition}"</li>
              <li class="word-definition">"{props.definition2}"</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordComponent;
