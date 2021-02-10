import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
const AppStyles = styled.div`
  &>h1 {
    color: teal;
  }
* {
  margin: 0;
  padding: 0;
}


`

function App() {
  return (
    <AppStyles>
      <h1>Kristian Kjeldsen</h1>
      <p>Here shall come forth, the most glorious portfolio ever!</p>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
    </AppStyles>
  );
}

export default App;
