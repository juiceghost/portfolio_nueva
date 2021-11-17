import styled, { createGlobalStyle } from 'styled-components';

import {
  BrowserRouter as Router,
  Routes,
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

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/" element={<About />}/>
            <Route path="/" element={<About />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
