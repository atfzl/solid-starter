import { appHeaderPipeline } from '#/modules/header/pipeline';
import { css } from 'emotion';

function Header() {
  return (
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
  );
}

export default Header;
