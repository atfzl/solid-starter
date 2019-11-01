import { SuperTag, TagModel, TaskDoc } from '#/models/task.model';
import { createState } from 'solid-js';

export interface TaskState {
  tasks: TaskDoc[];
  tags: TagModel[];
  superTag: SuperTag;
}

const [taskState, setTaskState] = createState<TaskState>({
  tasks: [],
  tags: [
    {
      text: 'next',
      active: false,
    },
    {
      text: 'home',
      active: false,
    },
    {
      text: '@sakib',
      active: false,
    },
    {
      text: '@neha',
      active: false,
    },
    {
      text: 'work',
      active: false,
    },
  ],
  superTag: 'next',
});

export { taskState, setTaskState };
