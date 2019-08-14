import { createState, onCleanup } from 'solid-js';

function App() {
  const [state, setState] = createState({ counter: 0 });

  const intervalId = setInterval(() => {
    setState(state => ({ counter: state.counter + 1 }));
  }, 1000);

  onCleanup(() => {
    clearInterval(intervalId);
  });

  return (
    <div>
      Counter <div>{(void 0, state.counter)}</div>
    </div>
  );
}

export default App;
