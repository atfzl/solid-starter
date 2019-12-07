import { ArticleModel, TagModel } from '#/models/model';
import { setHomeState } from './home.state';

export const homeActions = {
  setSelectedFeed(selectedFeed: 'global' | 'personal' | TagModel) {
    setHomeState({ selectedFeed, offset: 0 });
  },
  setArticles(articles: ArticleModel[], articlesLength: number) {
    setHomeState({ feedArticles: articles, articlesLength });
  },
  setTags(tags: TagModel[]) {
    setHomeState({ tags });
  },
  setSelectedTag(tag: TagModel) {
    this.setSelectedFeed('#' + tag);
  },
  setOffset(offset: number) {
    setHomeState({ offset });
  },
};
