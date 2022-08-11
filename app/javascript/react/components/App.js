import React from "react";
import testComponent from "./testComponent";
import { Route, BrowserRouter } from "react-router-dom";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={testComponent} />
    </BrowserRouter>
  );
};
export default App;
