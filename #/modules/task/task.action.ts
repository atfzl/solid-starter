import { TagModel, TaskModel } from '#/models/task.model';
import { setTaskState } from './task.state';

export const taskActions = {
  onTagClick(tagText: string) {
    setTaskState('tags', {}, (tag: TagModel) => {
      return { active: tag.text === tagText ? !tag.active : false };
    });
  },
  onAllTagClick() {
    setTaskState('tags', {}, { active: false });
  },
  onCheckboxClick(id: string, checked: boolean) {
    setTaskState('tasks', (task: TaskModel) => task.id === id, { checked });
  },
};
