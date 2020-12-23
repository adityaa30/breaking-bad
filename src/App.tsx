import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import CharacterDetails from "./components/CharacterDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/character/:charId">
          <CharacterDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
