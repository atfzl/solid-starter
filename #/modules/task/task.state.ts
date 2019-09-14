import { TaskModel } from '#/models/Task';
import { createState } from 'solid-js';

interface State {
  tasks: TaskModel[];
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
});

export { taskState, setTaskState };
