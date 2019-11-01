import { SuperTag, TagModel, TaskDoc } from '#/models/task.model';
import { createState } from 'solid-js';

export interface TaskState {
  tasks: TaskDoc[];
  tags: TagModel[];
  superTag: SuperTag;
}

const [taskState, setTaskState] = createState<TaskState>({
  tasks: [],
  tags: [],
  superTag: 'next',
});

export { taskState, setTaskState };
