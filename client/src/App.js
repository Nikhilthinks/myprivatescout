import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Package from "./components/package";
import AuthForm from "./components/authform";
import store from "./store";
import Dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./components/PrivateRoute";
import {UserLoad} from "./actions/auth"
import setAuthToken from './utils/setAuthToken'
import Store from "./components/storeHome/store";


if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(()=>{
    store.dispatch(UserLoad())
  })
  return (
    <Provider store={store}>
      <Router>
        <Fragment className="App">
          <Route exact path="/package" component={Package} />
          <Switch>
          <Route exact path="/auth" component={AuthForm} />
          <Route exact path="/" component={Store} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
