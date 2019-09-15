import { TaskModel } from '#/models/task.model';
import { createState } from 'solid-js';

export interface TaskState {
  tasks: TaskModel[];
  tags: Array<{ text: string; active: boolean }>;
}

const [taskState, setTaskState] = createState<TaskState>({
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
        next: true,
      },
      superTags: {
        next: true,
      },
    },
    {
      id: '3',
      text: 'swap phone with neha',
      checklists: [],
      tags: {
        home: true,
        '@neha': true,
      },
      superTags: {
        next: true,
      },
    },
    {
      id: '4',
      text: 'engine docker build performance',
      checklists: [],
      tags: {
        work: true,
      },
      superTags: {
        next: true,
      },
    },
  ],
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
