import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./components/Home";
import CharacterDetails from "./components/CharacterDetails";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/character/:charId">
            <CharacterDetails />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
