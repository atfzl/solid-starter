import Link from '#/components/link';
import { location } from '#/utils/router';
import { css } from 'emotion';
import { Show } from 'solid-js/dom';

function Header() {
  return (
    <div
      className={
        (void 0,
        css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 16px;
        `)
      }
    >
      <Link
        className={css`
          text-decoration: none;
          font-size: 24px;
          font-weight: 600;
          color: #1973e8;
        `}
        href="/"
      >
        The Movie DB
      </Link>
      <Show when={(void 0, location() === '/')}>
        <Link
          className={css`
            position: absolute;
            right: 16px;
          `}
          href="/logout"
        >
          logout
        </Link>
      </Show>
    </div>
  );
}

export default Header;
