import Header from '#/components/header';
import '#/effects/protected-routes';
import { location, Route, RouteSwitch } from '#/router';
import { Show } from 'solid-js/dom';
import HomeRoute from './home';
import LoginRoute from './login';

function Routes() {
  return (
    <div>
      <Show when={(void 0, ['/', '/login'].includes(location()))}>
        <Header />
      </Show>

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
