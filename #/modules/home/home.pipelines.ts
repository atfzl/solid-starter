import {
  articlesApi,
  GetAllArticlesParams,
  GetAllArticlesResponse,
} from '#/api/articles.api';
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
        const commonParams = {
          limit: homeState.limit,
          offset: homeState.offset,
        };

        let params: GetAllArticlesParams = commonParams;
        if (homeState.selectedFeed?.startsWith('#')) {
          params = {
            ...commonParams,
            tag: homeState.selectedFeed.slice(1),
          };
        }

        response = await articlesApi.search(params);
      }

      homeActions.setArticles(
        response.data.articles,
        response.data.articlesCount,
      );
    });
  },
  async getTagsPipeline() {
    const response = await tagsApi.all();

    homeActions.setTags(response.data.tags);
  },
};
