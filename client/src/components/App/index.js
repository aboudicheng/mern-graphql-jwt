import React, { useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from '../Navigation';
import Home from '../Home';
import Signup from '../Signup';
import Login from '../Login';
import NotFound from '../NotFound';
import useWithAuthenticate from '../WithAuthenticate';
import * as routes from '../../constants/routes';
import { useMappedState } from 'redux-react-hook';
import './App.css';

function App() {
  useWithAuthenticate();

  const mapState = useCallback((state) => ({
    loading: state.sessionState.loading
  }), [])

  const { loading } = useMappedState(mapState);

  if (loading) return <h1>Loading...</h1>

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <Switch>
            <Route exact path={routes.HOME} component={() => <Home />} />
            <Route exact path={routes.SIGN_UP} component={() => <Signup />} />
            <Route exact path={routes.LOGIN} component={() => <Login />} />
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
