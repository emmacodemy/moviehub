import React from "react";
import { Switch, Route } from "react-router-dom";

import SignUp from "./pages/Signup/Signup.component.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="App">
              <header className="App-header">
                <h1>MOVIEHUB</h1>
              </header>
            </div>
          )}
        />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
