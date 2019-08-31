import * as fetchJsonp from 'fetch-jsonp';
import { from, Observable } from 'rxjs';

const API_KEY = '2c94dbb2066350b2136311320000f21c';
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';

export type MovieListType = 'now_playing' | 'top_rated';

export interface MultiSearchResult {
  page: number;
  total_results: number;
  total_pages: number;
  results: ResultRow[];
}

export interface ResultRow {
  original_name?: string | null;
  id: number;
  media_type?: SearchType;
  name?: string | null;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  popularity: number;
  genre_ids?: number[] | null;
  original_language: string;
  backdrop_path: string;
  overview: string;
  video?: boolean | null;
  title?: string | null;
  original_title?: string | null;
  adult?: boolean | null;
  release_date?: string | null;
}

export type SearchType =
  | 'multi'
  | 'tv'
  | 'person'
  | 'movie'
  | 'company'
  | 'collection'
  | 'keyword';

export const fetchMovieListing = (
  type: MovieListType,
  page: number = 1,
): Observable<MultiSearchResult> =>
  from(
    fetchJsonp(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&page=${page}`)
      .then(response => response.json())
      .catch(e => {
        console.error(e.message);
      }),
  );

export const getImageSrc = (path: string) => `${BASE_IMG_URL}${path}`;
