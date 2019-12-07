import { ArticleModel, TagModel } from '#/models/model';
import { setHomeState } from './home.state';

export const homeActions = {
  setSelectedFeed(selectedFeed: 'global' | 'personal') {
    setHomeState({ selectedFeed });
  },
  setArticles(articles: ArticleModel[]) {
    setHomeState({ feedArticles: articles });
  },
  setTags(tags: TagModel[]) {
    setHomeState({ tags });
  },
  setSelectedTag(tag: TagModel) {
    setHomeState({ selectedFeed: '#' + tag });
  },
};
