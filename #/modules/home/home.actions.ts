import { articlesApi } from '#/api/articles.api';
import { tagsApi } from '#/api/tags.api';
import { setHomeState } from './home.state';

export const homeActions = {
  async fetchAndSetAllTagsState() {
    const response = await tagsApi.all();

    setHomeState({ tags: response.data.tags });
  },
  async fetchAndSetGlobalFeedState() {
    const response = await articlesApi.search();

    setHomeState({ feedArticles: response.data.articles });
  },
};
