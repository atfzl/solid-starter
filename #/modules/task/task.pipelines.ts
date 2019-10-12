import { TaskDoc, TaskModel } from '#/models/task.model';
import { getDropboxDB } from '#/services/dropbox.service';
import masterDB from '#/services/pouchdb.service';
import * as MemoryStream from 'memorystream';
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
    return getDropboxDB().subscribe(response => {
      console.log(response);
    });
  },
  () => {
    const stream = new MemoryStream();

    var dumpedString = '';
    stream.on('data', function(chunk: any) {
      dumpedString += chunk.toString();
    });

    (masterDB as any).dump(stream).then(function() {
      console.log(dumpedString);
    });
  },
];

function activateTaskPipelines() {
  taskPipelines.forEach(pipeline => {
    pipeline();
  });
}

export { activateTaskPipelines };
