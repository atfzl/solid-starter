import { history } from '#/router';

export function appHeaderPipeline(element: HTMLElement) {
  const unlisten = history.listen(updateStyles);

  function updateStyles(location: { pathname: string }) {
    if (!element) {
      unlisten();
    }

    if (location.pathname === '/') {
      element.style.transform = 'translate(-550px, -160px) scale(1.5)';
    } else {
      element.style.transform = 'none';
    }
  }

  updateStyles({ pathname: window.location.pathname });
}
