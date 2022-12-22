import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navigation from "./components/Navigation";
import BenchIndexPage from "./components/BenchIndexPage";
import BenchShowPage from "./components/BenchShowPage";

function App() {
  return (
    <>
      <Navigation />
          <Switch>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/">
              <BenchIndexPage />
            </Route>
            <Route path="/benches/:benchId">
              <BenchShowPage />
            </Route>
          </Switch>
    </>
  );
}

export default App;
