import { createState } from 'solid-js';

const [history, setHistory] = createState({ location: window.location.hash });

window.addEventListener('hashchange', () => {
  setHistory({ location: window.location.hash });
});

export { history };
