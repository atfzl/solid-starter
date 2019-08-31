import { fetchMovieListing } from '#/interfaces/movieListing';
import { setHomeState } from './state';

export function homeLoadPipeline() {
  fetchMovieListing('top_rated').subscribe(result => {
    setHomeState({ topRatedMovies: result });
  });
}
