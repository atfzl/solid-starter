import { taskState } from './task.state';

export const superTagTasksSelector = () => {
  return taskState.tasks.filter(task => task.superTags[taskState.superTag]);
};
