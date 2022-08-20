import React from "react";


export const GuessTell = (props) => {


  return (
    <div>
      <br/>
      <div className=" guess-display" id={props.class}> {props.content}</div>
    </div>
  )

}

export default GuessTell