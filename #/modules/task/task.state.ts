import { TaskModel } from '#/models/Task';
import { createState } from 'solid-js';

interface State {
  tasks: TaskModel[];
  tags: Array<{ text: string; active: boolean }>;
}

const [taskState, setTaskState] = createState<State>({
  tasks: [
    {
      id: '1',
      text: 'buy ktm insurance policy',
      checklists: [],
      tags: {
        '@sakib': true,
        home: true,
      },
      superTags: {
        inbox: true,
      },
    },
    {
      id: '2',
      text: 'thailand holiday booking',
      checklists: [],
      tags: {
        home: true,
      },
      superTags: {
        next: true,
      },
    },
  ],
  tags: [
    {
      text: 'All',
      active: true,
    },
    {
      text: 'next',
      active: false,
    },
    {
      text: 'Home',
      active: true,
    },
  ],
});

export { taskState, setTaskState };
