import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navigation from './components/Navigation.js';

import GitHubUsers from './components/GitHubUsers.js';

import FormComp from './components/FormComp.js'

import './components/gi-utils/gi-utils-style.css';



function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <div>


        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/forms" component={Forms} />
      </div>
  </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <GitHubUsers/>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

function Forms() {
  return (
    <div className="container gi-p-t">

    <div className="row">
      <FormComp/>
    </div>
    </div>

  );
}

export default App;
