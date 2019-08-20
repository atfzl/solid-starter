import * as history from 'history';
import { createSignal } from 'solid-js';

const [location, setLocation] = createSignal(window.location.pathname);

const browserHistory = history.createBrowserHistory();

browserHistory.listen(e => {
  setLocation(e.pathname);
});

export { location, browserHistory as history };
