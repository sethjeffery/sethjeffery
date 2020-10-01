import React from 'react';
import styled from 'styled-components/macro';
import Side from './Side';
import Seth from './pages/Seth';
import Events from './pages/Events';
import Ana from './pages/Ana';
import Music from './pages/Music';
import Work from './pages/Work';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  matchPath
} from 'react-router-dom';
import { pageColors } from './colors';

function Content({ className, location: { pathname } }) {
  // on page change, transition the primary color
  for(const key of Object.keys(pageColors)) {
    if(matchPath(pathname, { path: key })) {
      document.documentElement.style.setProperty('--primary', pageColors[key]);
      break;
    }
  }

  return (
    <div className={className}>
      <Side/>
      <main>
        <Switch>
          <Route path="/" exact><Seth path="/"/></Route>
          <Route path="/events"><Events path="/events"/></Route>
          <Route path="/ana"><Ana path="/ana"/></Route>
          <Route path="/music"><Music path="/music"/></Route>
          <Route path="/work"><Work path="/work"/></Route>
        </Switch>
      </main>
    </div>
  );
}

const StyledContent = withRouter(styled(Content)`
  display: flex;
  width: 100%;
  height: 100vh;

  main {
    flex: 1 1 1200px;
    position: relative;
  }
`);

export default function App() {
  return (
    <Router>
      <StyledContent/>
    </Router>
  );
}
