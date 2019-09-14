import { css } from 'emotion';
import Routes from './routes';
import './style';

function App() {
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        min-width: 600px;
      `}
    >
      <Routes />
    </div>
  );
}

export default App;
