import './App.css';
import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faYoutube } from '@fortawesome/free-solid-svg-icons';
import linkedin from './icons/linkedin-in-brands.svg';
import github from './icons/github-brands.svg';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="d-flex justify-content-around p-3 mb-2 bg-success">
            <Link to="/"><FontAwesomeIcon icon={faHome}/></Link>  
            <a href="https://www.linkedin.com/in/aa-nadim/"><img className="linkedin" src={linkedin} alt=""/></a>  
            <a href="https://github.com/aa-nadim"><img className="github" src={github} alt=""/></a>
          </div>
          <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/league/:idLeague">
              <LeagueDetails/>
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
