import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import Map from '@views/Map';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/map" component={Map} />
          <Redirect to="/map" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
