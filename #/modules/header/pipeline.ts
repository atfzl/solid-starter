import { history } from '#/router';

export function appHeaderPipeline(element: HTMLElement) {
  const unlisten = history.listen(updateStyles);

  function updateStyles(location: { pathname: string }) {
    /**
     * stop the subscriber if component was unmounted
     */
    if (!element) {
      unlisten();
      return;
    }

    if (location.pathname === '/') {
      element.style.transform = 'translate(-550px, -160px) scale(1.5)';
    } else {
      element.style.transform = 'none';
    }
  }

  updateStyles({ pathname: window.location.pathname });
}
