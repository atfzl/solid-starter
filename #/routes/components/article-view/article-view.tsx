import articleViewCSS from '!!raw-loader!./article-view.css';
import { css } from 'emotion';
import * as Readability from 'readability';

export function ArticleView() {
  function onLoad() {
    const iframeDocument = (document.getElementById('article-view') as any)
      .contentDocument;

    console.log(iframeDocument);

    const article = new Readability(iframeDocument).parse();

    iframeDocument.head.innerHTML = `
      <style>
        ${articleViewCSS}
        body {
          max-width: 600px;
          margin: 0 auto;
        }
      </style>
    `;
    iframeDocument.body.classList = 'light sans-serif loaded';
    iframeDocument.body.innerHTML = `
      <div class="content">
        <div class="moz-reader-content line-height4 reader-show-element">
          ${article.content}
        </div>
      </div>
    `;
    console.log(article);
  }

  return (
    <iframe
      id="article-view"
      onLoad={onLoad}
      src="https://www.atfzl.com/understanding-solid-jsx"
      className={css`
        width: 100%;
        height: 100%;
      `}
    ></iframe>
  );
}
