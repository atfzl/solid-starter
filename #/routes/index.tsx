import Header from '#/components/header';
import '#/effects/protected-routes';
import { Route, RouteSwitch } from '#/router';
import HomeRoute from './home';
import LoginRoute from './login';

function Routes() {
  return (
    <div>
      <Header />
      <RouteSwitch>
        <Route path="/">
          <HomeRoute />
        </Route>
        <Route path="/login">
          <LoginRoute />
        </Route>
      </RouteSwitch>
    </div>
  );
}

export default Routes;
