import { fetchMovieListing } from '#/models/movieListing';
import { setHomeState } from './state';

export function homeLoadPipeline() {
  fetchMovieListing('top_rated').subscribe(result => {
    setHomeState({ topRatedMovies: result });
  });
}
