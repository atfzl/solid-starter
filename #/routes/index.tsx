import Header from '#/components/header';
import '#/effects/protected-routes';
import { location } from '#/router';
import { Match, Show, Switch } from 'solid-js/dom';
import HomeRoute from './home';
import LoginRoute from './login';

function Routes() {
  return (
    <div>
      <Show when={(void 0, ['/', '/login'].includes(location()))}>
        <Header />
      </Show>
      <Switch>
        <Match when={(void 0, location() === '/')}>
          <HomeRoute />
        </Match>
        <Match when={(void 0, location() === '/login')}>
          <LoginRoute />
        </Match>
      </Switch>
    </div>
  );
}

export default Routes;
