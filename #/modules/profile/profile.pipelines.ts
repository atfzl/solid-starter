import { articlesApi, GetAllArticlesParams } from '#/api/articles.api';
import { profileApi } from '#/api/profile.api';
import { createEffect } from 'solid-js';
import { routingState } from '../routing/routing.state';
import { profileActions } from './profile.actions';
import { profileState } from './profile.state';

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
  getProfileArticlesPipeline() {
    createEffect(async () => {
      if (!routingState.locationHash.startsWith('#/@')) {
        return;
      }
      const username = routingState.locationHash.slice(3);

      const params: GetAllArticlesParams = {
        limit: 5,
        offset: 0,
      };

      if (profileState.selectedArticles === 'personal') {
        params.author = decodeURI(username);
      } else {
        params.favorited = decodeURI(username);
      }

      const response = await articlesApi.search(params);

      profileActions.setProfileArticles(response.data.articles);
    });
  },
};
