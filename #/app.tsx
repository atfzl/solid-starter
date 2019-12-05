import { css } from 'emotion';
import { RootRoute } from './routes/root.route';
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
      <RootRoute />
    </div>
  );
}

export default App;
