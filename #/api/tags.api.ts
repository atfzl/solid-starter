import { TagModel } from '#/models/model';
import { axiosInstance } from '#/singletons/axios.singleton';

export const tagsApi = {
  all() {
    return axiosInstance.get<{ tags: TagModel[] }>('/tags');
  },
};
