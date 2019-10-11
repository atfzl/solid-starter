import { render } from 'solid-js/dom';
import App from './app';

const renderApp = () => {
  const appElement = document.getElementById('root')!;

  while (appElement.firstChild) {
    appElement.removeChild(appElement.firstChild);
  }

  render(() => <App />, appElement);
};

if (module.hot) {
  module.hot.accept();

  renderApp();
} else {
  renderApp();
}
