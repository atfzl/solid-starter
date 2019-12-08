import { ArticleModel, ProfileModel } from '#/models/model';
import { createState } from 'solid-js';

interface ProfileState {
  profileData?: ProfileModel;
  articles: ArticleModel[];
  selectedArticles: 'personal' | 'favorited';
}

const [profileState, setProfileState] = createState<ProfileState>({
  articles: [],
  selectedArticles: 'personal',
});

export { profileState, setProfileState };
