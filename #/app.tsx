import { css } from 'emotion';
import Routes from './routes';
import './style';

function App() {
  return (
    <div
      className={css`
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      `}
    >
      <Routes />
    </div>
  );
}

export default App;
