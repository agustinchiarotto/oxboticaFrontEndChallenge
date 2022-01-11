import { Switch, Route } from 'react-router-dom';
import routes from '../constants/routes/routes';
import { ErrorPage, Home, NotFound, Telemetry } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path={routes.NOT_FOUND} component={NotFound} />
      <Route path={routes.ERROR_PAGE} component={ErrorPage} />
      <Route path={routes.TELEMETRY} component={Telemetry} />
      <Route path={routes.HOME} component={Home} />
    </Switch>
  );
};

export default Routes;
