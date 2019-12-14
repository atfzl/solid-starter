import { createState } from 'solid-js';

const [routingState, setRoutingState] = createState({
  locationHash: window.location.hash,
});

export { routingState, setRoutingState };
