import { setRoutingState } from '#/modules/routing/routing.state';

export const routingActions = {
  setLocation(locationHash: string) {
    setRoutingState({ locationHash });
  },
};
