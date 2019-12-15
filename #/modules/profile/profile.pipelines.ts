import { profileApi } from '#/api/profile.api';
import { createEffect } from 'solid-js';
import { routingState } from '../routing/routing.state';
import { profileActions } from './profile.actions';

export const profilePipelines = {
  getProfileDataPipeline() {
    createEffect(async () => {
      if (!routingState.locationHash.startsWith('#/@')) {
        return;
      }
      const username = routingState.locationHash.slice(3);
      const response = await profileApi.get(username);

      profileActions.setProfile(response.data.profile);
    });
  },
};
