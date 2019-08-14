import { injectGlobal } from 'emotion';

injectGlobal`
 * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;
