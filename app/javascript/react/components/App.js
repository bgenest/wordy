import React from "react";
import wordIndex from "./wordIndex";
import testComponent from "./testComponent";
import { Route, BrowserRouter,Switch } from "react-router-dom";

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={testComponent} />
      <Route exact path="/words" component={wordIndex} />
    </Switch>
    </BrowserRouter>
  );
};
export default App;
