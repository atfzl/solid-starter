import { ArticleModel, TagModel } from '#/models/model';
import { axiosInstance } from '#/singletons/axios.singleton';

interface GetAllArticlesParams {
  limit?: number;
  offset?: number;
  tag?: TagModel;
}

const GetAllArticlesDefaultParams = {
  limit: 10,
  offset: 0,
};

export interface GetAllArticlesResponse {
  articles: ArticleModel[];
  articlesCount: number;
}

export const articlesApi = {
  search(params: GetAllArticlesParams = GetAllArticlesDefaultParams) {
    return axiosInstance.get<GetAllArticlesResponse>('/articles', {
      params: { ...GetAllArticlesDefaultParams, ...params },
    });
  },
  feed(params: GetAllArticlesParams = GetAllArticlesDefaultParams) {
    return axiosInstance.get<GetAllArticlesResponse>('/articles/feed', {
      params: params,
    });
  },
};
