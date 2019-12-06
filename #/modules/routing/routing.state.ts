import { createState } from 'solid-js';

const [routingState, setRoutingState] = createState({
  location: window.location.hash,
});

export { routingState, setRoutingState };
