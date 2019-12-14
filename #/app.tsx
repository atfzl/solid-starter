import { routingPipelines } from '#/modules/routing/routing.pipelines';
import { routingState } from '#/modules/routing/routing.state';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RootRoute } from './routes/root.route';

function App() {
  routingPipelines();

  return (
    <div>
      <NavbarComponent />
      <RootRoute location={routingState.locationHash} />
    </div>
  );
}

export default App;
