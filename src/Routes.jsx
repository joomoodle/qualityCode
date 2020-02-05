import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { store } from "./reducers/createStore";

import SignIn from "./views/SignIn";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/sign-in" />
        <Route component={SignIn} exact path="/sign-in" />
      </Switch>
    );
  }
}

export const PrivateRoute = ({ component: Component, name, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const state = store.getState();
      const { user } = state;
      const { modules } = user;
      if (modules) {
        for (let index = 0; index < modules.length; index++) {
          const element = modules[index];
          if (element.name === name && element.idtask === 1) {
            return <Component {...props} />;
          }
        }
      }
      return <Redirect to="/not-found" />;
    }}
  />
);
