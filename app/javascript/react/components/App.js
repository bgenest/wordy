import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";

import wordIndex from "./wordIndex";
import SessionNew from "./SessionNew";
import TutorialPage from "./TutorialPage";

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={wordIndex} />
      <Route exact path="/sessions/new" component={SessionNew} />
      <Route exact path="sessions/tutorial" component={TutorialPage}/>
    </Switch>
    </BrowserRouter>
  );
};
export default App;
