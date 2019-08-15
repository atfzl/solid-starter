import { injectGlobal } from 'emotion';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
    font-size: 10px;
  }

  body {
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;
