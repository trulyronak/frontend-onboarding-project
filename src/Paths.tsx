import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import CreateItem from './pages/CreateItem';
import Home from './pages/Home';
import Login from './pages/Login';
import YourOrders from './pages/YourOrders';
import { pathLinks } from './pathLinks';

function Paths() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={pathLinks.home} component={Home} />
        <Route path={pathLinks.login} component={Login} />
        <Route path={pathLinks.createAccount} component={CreateAccount} />
        <Route path={pathLinks.orders} component={YourOrders} />
        <Route path={pathLinks.createItem} component={CreateItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default Paths;
