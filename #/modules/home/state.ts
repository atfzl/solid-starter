import { MultiSearchResult } from '#/interfaces/movieListing';
import { createState } from 'solid-js';

interface State {
  topRatedMovies?: MultiSearchResult;
  nowPlaying?: MultiSearchResult;
}

const [homeState, setHomeState] = createState<State>({});

export { homeState, setHomeState };
