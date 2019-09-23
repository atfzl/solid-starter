import { createRoot } from 'solid-js';
import App from './app';

const renderApp = () => {
  const appElement = document.getElementById('root')!;

  while (appElement.firstChild) {
    appElement.removeChild(appElement.firstChild);
  }

  createRoot(() => appElement.appendChild(<App /> as HTMLElement));
};

if (module.hot) {
  module.hot.accept();

  renderApp();
}

export default void 0;
