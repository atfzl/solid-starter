import { setRoutingState } from '#/modules/routing/routing.state';

export const routingActions = {
  setLocation(location: string) {
    setRoutingState({ location });
  },
};
