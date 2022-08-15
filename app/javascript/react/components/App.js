import React from "react";
import wordIndex from "./wordIndex";
import { Route, BrowserRouter,Switch } from "react-router-dom";

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={wordIndex} />
    </Switch>
    </BrowserRouter>
  );
};
export default App;
