import React from "react";

export const WordComponent = (props) => {
  return (
    <div class="grid-container">
      <div class="grid-x grid-padding-x grid-padding-y word-tile">
        <div class="cell">
          <div class="card">
            <h2 class="title-page">definition</h2>
            <div class="card-section">
            <h3 class="word-word">{props.word}:</h3>
            <p class="word-definition">"{props.definition}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordComponent;
