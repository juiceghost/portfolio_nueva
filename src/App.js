import styled, { createGlobalStyle } from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Header from './Header';


const AppStyles = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css?family=Nunito|Roboto');

* {
  margin: 0;
  padding: 0;
}
body {
    padding: 0;
    margin: 0;
    font-family: Nunito, Roboto, sans-serif;
  }

`

function App() {
  return (
    <>
      <AppStyles />
      <Router>
        <Header />
        <hr />
        <p>Here shall come forth, the most glorious portfolio ever!</p>
        <div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
