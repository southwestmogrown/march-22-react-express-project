import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import Sidebar from "./components/SideBar";
import Chat from "./components/Chat";

import './App.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
            <Route exact path="/">
              <SplashPage />
            </Route>
            <Route path='/users/:userId'>
              <div className="App">
                  <Sidebar />
                  <Chat />
              </div>
            </Route>
          </Switch>
      )}
    </>
  );
}

export default App;