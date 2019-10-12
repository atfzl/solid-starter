import { TagModel, TaskDoc } from '#/models/task.model';
import { createState } from 'solid-js';

export interface TaskState {
  tasks: TaskDoc[];
  tags: TagModel[];
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
      active: true,
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
});

export { taskState, setTaskState };
