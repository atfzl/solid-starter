export interface AuthorModel {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
}

export interface ProfileModel extends AuthorModel {
  email: string;
  token: string;
}

export interface ArticleModel {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: AuthorModel;
  tagList: Array<string>;
}

export interface CommentModel {
  id: number;
  body: string;
  createdAt: string;
  author: AuthorModel;
}

export type TagModel = string;
