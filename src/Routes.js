import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Pages/Shop';
import Contact from './components/Pages/Contact';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/Shop' component={Shop} />
        <Route exact path='/ContactUs' component={Contact} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
