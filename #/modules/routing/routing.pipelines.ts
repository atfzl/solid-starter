import { routingActions } from './routing.actions';

export const routingPipelines = () => {
  window.addEventListener('hashchange', () => {
    routingActions.setLocation(window.location.hash);
  });
};
