import { createEffect } from 'solid-js';
import { routingActions } from './routing.actions';
import { routingState } from './routing.state';

export const routingPipelines = () => {
  createEffect(() => {
    if (!routingState.locationHash.startsWith('#')) {
      window.location.hash = '#/';
    }
  });

  window.addEventListener('hashchange', () => {
    routingActions.setLocation(window.location.hash);
  });
};
