import { articlesApi, GetAllArticlesResponse } from '#/api/articles.api';
import { tagsApi } from '#/api/tags.api';
import { AxiosResponse } from 'axios';
import { createEffect } from 'solid-js';
import { homeActions } from './home.actions';
import { homeState } from './home.state';

export const homePipelines = {
  getFeedArticlesPipeline() {
    createEffect(async () => {
      let response: AxiosResponse<GetAllArticlesResponse> | undefined;
      if (homeState.selectedFeed === 'personal') {
        response = await articlesApi.feed();
      } else {
        const params = homeState.selectedFeed?.startsWith('#')
          ? {
              tag: homeState.selectedFeed.slice(1),
            }
          : undefined;
        response = await articlesApi.search(params);
      }

      homeActions.setArticles(response.data.articles);
    });
  },
  async getTagsPipeline() {
    const response = await tagsApi.all();

    homeActions.setTags(response.data.tags);
  },
};
