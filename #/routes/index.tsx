import { location } from '#/utils/router';
import { Match, Switch } from 'solid-js/dom';
import HomeRoute from './home';

function Routes() {
  return (
    <div>
      <Switch>
        <Match when={(void 0, location() === '/')}>
          <HomeRoute />
        </Match>
      </Switch>
    </div>
  );
}

export default Routes;
