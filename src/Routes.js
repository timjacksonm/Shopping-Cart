import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Pages/Shop';
import Contact from './components/Pages/Contact';

function Routes() {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/Shopping-Cart' component={App} />
        <Route exact path='/Shopping-Cart/shop' component={Shop} />
        <Route exact path='/Shopping-Cart/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
