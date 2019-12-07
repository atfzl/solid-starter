import { ArticleModel, TagModel } from '#/models/model';
import { createState } from 'solid-js';

interface HomeState {
  feedArticles: ArticleModel[];
  selectedFeed: 'global' | 'personal' | TagModel;
  tags: TagModel[];
}

const [homeState, setHomeState] = createState<HomeState>({
  feedArticles: [],
  selectedFeed: 'global',
  tags: [],
});

export { homeState, setHomeState };
