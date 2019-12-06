import { history } from '#/services/history';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RootRoute } from './routes/root.route';

function App() {
  return (
    <div>
      <NavbarComponent />
      <RootRoute location={history.location} />
    </div>
  );
}

export default App;
