import React from 'react';
import ReactDOM from 'react-dom';
import {injectGlobal} from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {LandingPage} from './features';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
body, * {
  background-color: black;
  border: none;
  color: white;
}
h1, h2, h3 {
  text-align: center;
  display: block;
  margin: 0 auto;
  color: white;
}
body {
  margin: 0;
}
h1 {
  font-family: "Permanent Marker", cursive;
  margin: 0.25em auto 0 auto;
  text-transform: uppercase;
  position: relative;
  font-size: 2.5em;
}
h2 { font-size: 2.25rem; }
h3 { font-size: 2rem; }

@media (min-width: 600px) {
  h1 { margin: 2em auto; font-size: 4em; }
  h2 { margin: 2em auto; font-size: 3em; }
  h3 { margin: 2em auto 1em auto; }
  p { font-size: 1.4em; line-height: 1.4em; }
}
`;

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
