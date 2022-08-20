import React from "react";


export const GuessTell = (props) => {


  return (
    <div>
      <br/>
      <div className=" cell guess-display" id={props.class}> {props.content}</div>
    </div>
  )

}

export default GuessTell