import React from "react";

export const GameTypeTile = (props) => {



  return (
<div className="grid-container tile-container" id ="game-option-tile">
  <div className="grid-x grid-padding-x grid-padding-y word-tile">
    <div className="cell card">
      <div className="float-center" id="game-title"> 
        {props.title} {props.icon}
      </div>
      <hr/>
      <div id="game-description"> 
        {props.description}
      </div>
      <a className="button-19 " role="button" href={props.url}>
        let's go!
      </a>
    </div>
  </div>
</div>
  )
}

export default GameTypeTile
