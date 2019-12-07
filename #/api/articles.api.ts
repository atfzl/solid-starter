import { ArticleModel } from '#/models/model';
import { axiosInstance } from '#/singletons/axios.singleton';

interface GetAllArticlesParams {
  limit: number;
  offset: number;
}

interface GetAllArticlesResponse {
  articles: ArticleModel[];
  articlesCount: number;
}

export const articlesApi = {
  search(params: GetAllArticlesParams = { limit: 10, offset: 0 }) {
    return axiosInstance.get<GetAllArticlesResponse>('/articles', {
      params: params,
    });
  },
  feed(params: GetAllArticlesParams = { limit: 10, offset: 0 }) {
    return axiosInstance.get<GetAllArticlesResponse>('/articles/feed', {
      params: params,
    });
  },
};
