import { MultiSearchResult } from '#/interfaces/movieListing';
import { createState } from 'solid-js';

interface State {
  topRatedMovies?: MultiSearchResult;
}

const [homeState, setHomeState] = createState<State>({});

export { homeState, setHomeState };
