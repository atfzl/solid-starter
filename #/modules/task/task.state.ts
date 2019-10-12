import { TagModel, TaskDoc, TaskModel } from '#/models/task.model';
import { getDropboxDB } from '#/services/dropbox.service';
import masterDB from '#/services/pouchdb.service';
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

masterDB.allDocs<TaskModel>({ include_docs: true }).then(result => {
  setTaskState({ tasks: result.rows.map(a => a.doc) });
});

masterDB
  .changes({ since: 'now', live: true, include_docs: true })
  .on('change', e => {
    setTaskState('tasks', (task: TaskDoc) => task._id === e.id, e.doc);
  });

getDropboxDB().subscribe(response => {
  console.log(response);
});

export { taskState, setTaskState };
