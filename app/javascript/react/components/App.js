import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";

import wordIndex from "./wordIndex";
import SessionNew from "./SessionNew";
import Footer from "./Footer";

export const App = (props) => {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={wordIndex} />
      <Route exact path="/sessions/new" component={SessionNew} />
    </Switch>
    </BrowserRouter>
    <Footer/> 
    </div>
  );
};
export default App;
