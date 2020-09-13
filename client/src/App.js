import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken  from './utils/setAuthToken';

// Cek apakah token tersedia
if(localStorage.token) {
  setAuthToken(localStorage.token)
 }

 const App = () => {

  // Meletakkan useEffect
  useEffect(() => {
  store.dispatch(loadUser());
  }, []);
 
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section>
        <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
 )
};

export default App;
