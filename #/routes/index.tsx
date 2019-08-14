import { Route, RouteSwitch } from '#/router';
import HomeRoute from './home';
import LoginRoute from './login';

function Routes() {
  return (
    <RouteSwitch>
      <Route path="/">
        <HomeRoute />
      </Route>
      <Route path="/login">
        <LoginRoute />
      </Route>
    </RouteSwitch>
  );
}

export default Routes;
