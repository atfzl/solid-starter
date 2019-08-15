import { history } from '#/router';
import { css } from 'emotion';

const translateCss = css`
  transform: translate(-550px, -160px) scale(1.5);
`;

export function appHeaderPipeline(element: HTMLElement) {
  const unlisten = history.listen(updateStyles);

  function updateStyles({ pathname }: { pathname: string }) {
    if (!element) {
      unlisten();
    }

    if (pathname === '/') {
      element.classList.add(translateCss);
    } else {
      element.classList.remove(translateCss);
    }
  }

  updateStyles({ pathname: window.location.pathname });
}
