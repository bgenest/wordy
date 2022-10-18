import React from "react";

export const GuessTell = (props) => {
  return (
    <div className="guess-letter-tile">
      <br/>
      <div className="cell guess-display" id={props.class}>
        {props.content}
      </div>
    </div>
  )
}

export default GuessTell