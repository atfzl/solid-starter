import { ArticleModel, ProfileModel } from '#/models/model';
import { setProfileState } from './profile.state';

export const profileActions = {
  setProfile(profileData: ProfileModel) {
    setProfileState({ profileData });
  },
  setProfileArticles(profileArticles: ArticleModel[]) {
    setProfileState({ articles: profileArticles });
  },
  setSelectedArticle(selectedArticles: 'personal' | 'favorited') {
    setProfileState({ selectedArticles });
  },
};
