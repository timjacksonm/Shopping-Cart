import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;