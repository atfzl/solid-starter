import Link from '#/components/link';
import { location } from '#/utils/router';
import { css } from 'emotion';

function Header() {
  return (
    <Link
      href="/"
      className={
        (void 0,
        css`
          text-decoration: none;
          font-size: 28px;
          font-weight: 600;
          transition: all 0.5s ease-in-out;
          transform-origin: top left;
          will-change: transform;
          position: fixed;
          top: 180px;
          left: calc(50% - 100px);
          ${location() === '/' && 'transform: translate(0, -160px) scale(0.7);'}
        `)
      }
    >
      The Movie DB
    </Link>
  );
}

export default Header;
