import { AuthorModel, ProfileModel } from '#/models/model';
import { axiosInstance } from '#/singletons/axios.singleton';

export const profileApi = {
  get(username: AuthorModel['username']) {
    return axiosInstance.get<{ profile: ProfileModel }>(
      `/profiles/${username}`,
    );
  },
};
