import { css } from 'emotion';
import { afterEffects } from 'solid-js';

export function ArticleView() {
  afterEffects(() => {});

  return (
    <iframe
      id="article-view"
      src="https://www.atfzl.com/understanding-solid-jsx"
      className={css`
        width: 100%;
        height: 100%;
      `}
    ></iframe>
  );
}
