import { ArticleModel, TagModel } from '#/models/model';
import { createState } from 'solid-js';

interface HomeState {
  feedArticles: ArticleModel[];
  selectedFeed: 'global' | 'personal' | TagModel;
  tags: TagModel[];
  articlesLength?: number;
  limit: number;
  offset?: number;
}

const [homeState, setHomeState] = createState<HomeState>({
  feedArticles: [],
  selectedFeed: 'global',
  tags: [],
  limit: 10,
  offset: 0,
});

export { homeState, setHomeState };
