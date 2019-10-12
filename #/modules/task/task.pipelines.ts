import { TaskDoc, TaskModel } from '#/models/task.model';
import masterDB from '#/services/pouchdb.service';
import { syncPouchDBWithDropbox } from '#/services/sync.service';
import { setTaskState } from './task.state';

const taskPipelines = [
  () => {
    masterDB.allDocs<TaskModel>({ include_docs: true }).then(result => {
      setTaskState({ tasks: result.rows.map(a => a.doc) });
    });
  },
  () => {
    masterDB
      .changes({ since: 'now', live: true, include_docs: true })
      .on('change', e => {
        setTaskState('tasks', (task: TaskDoc) => task._id === e.id, e.doc);
      });
  },
  () => {
    return syncPouchDBWithDropbox().subscribe();
  },
];

function activateTaskPipelines() {
  taskPipelines.forEach(pipeline => {
    pipeline();
  });
}

export { activateTaskPipelines };
