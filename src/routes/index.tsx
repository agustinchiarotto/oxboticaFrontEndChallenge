import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Telemetry from '../pages/telemetry/Telemetry';

const Routes = () => {
  return (
    <Switch>
      <Route path="/telemetry/:id" component={Telemetry} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
