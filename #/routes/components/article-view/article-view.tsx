import { css } from 'emotion';
import * as Readability from 'readability';
import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

const typography = new Typography(fairyGatesTheme);

export function ArticleView() {
  function onLoad() {
    const iframeDocument = (document.getElementById('article-view') as any)
      .contentDocument as Document;

    const article = new Readability(iframeDocument).parse();

    iframeDocument.head.innerHTML = `
      <style>
        ${typography.toString()}
      </style>
    `;
    iframeDocument.body.innerHTML = `
      <div style="max-width: 600px; margin: 0 auto; margin-top: 100px; margin-bottom: 100px;">
        <h1>
          ${article.title}
        </h1>
        ${article.content}
      </div>
    `;
  }

  return (
    <iframe
      id="article-view"
      onLoad={onLoad}
      src="https://blog.codinghorror.com/the-cloud-is-just-someone-elses-computer/"
      className={css`
        width: 100%;
        height: 100%;
        border: none;
      `}
    ></iframe>
  );
}
