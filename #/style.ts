import { injectGlobal } from 'emotion';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  * {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  html {
    height: 100%;
    width: 100%;
    font-size: 10px;
  }

  body {
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }
`;
