import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Vote from '../Vote/Vote';

const ClientRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/vote" component={Vote} />
    </Switch>
  )
}

export default ClientRouter;
