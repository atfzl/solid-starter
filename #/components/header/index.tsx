import { appHeaderPipeline } from '#/modules/header/pipelines';
import { location } from '#/router';
import { css } from 'emotion';
import { Show } from 'solid-js/dom';

function Header() {
  return (
    <Show when={(void 0, ['/', '/login'].includes(location()))}>
      {() => (
        <h1
          forwardRef={appHeaderPipeline}
          className={css`
            transition: all 0.5s ease-in-out;
            transform-origin: top left;
            will-change: transform;
            position: fixed;
            top: 160px;
            left: 600px;
          `}
        >
          The Movie DB
        </h1>
      )}
    </Show>
  );
}

export default Header;
