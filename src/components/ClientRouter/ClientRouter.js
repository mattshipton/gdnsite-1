import React from 'react';
import { Route, Switch } from 'react-router-dom';

const ClientRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/vote" component={Vote} />
    </Switch>
  )
}

export default Router;
