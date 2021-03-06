import { SuperTag, TagModel, TaskDoc } from '#/models/task.model';
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
    setTaskState('tasks', (task: TaskDoc) => task._id === id, { checked });
  },
  onSuperTagClick(id: SuperTag) {
    setTaskState({ superTag: id });
  },
};
