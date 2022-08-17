import React, { useState, useEffect } from "react";

import Grid from "./Grid";

export const SessionNew = (props) => {
  return (
    <div className="game-card-container float-center">
      <h1 className="title">Wordy </h1>
      <div className="grid-x grid-margin-x">
        <div className="card small-auto">
          <div className="">
            <Grid />
          </div>
          <button className="float-center button submit_button">Submit</button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SessionNew;
