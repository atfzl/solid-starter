import * as history from 'history';
import { createSignal } from 'solid-js';
import { Match, Switch } from 'solid-js/dom';

const [location, setLocation] = createSignal(window.location.pathname);

const browserHistory = history.createBrowserHistory();

browserHistory.listen(e => {
  setLocation(e.pathname);
});

function Route({ path, children }: { path: string; children: JSX.Element }) {
  return <Match when={(void 0, location() === path)}>{children}</Match>;
}

export {
  location,
  setLocation,
  browserHistory as history,
  Route,
  Switch as RouteSwitch,
};
