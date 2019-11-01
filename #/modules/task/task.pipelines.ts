import { TaskDoc, TaskModel } from '#/models/task.model';
import masterDB from '#/services/pouchdb.service';
import { syncPouchDBWithDropbox } from '#/services/sync.service';
import * as R from 'ramda';
import { createEffect, sample } from 'solid-js';
import { superTagTasksSelector } from './task.selectors';
import { setTaskState, taskState } from './task.state';

export const dumpDBToUI = () => {
  masterDB.allDocs<TaskModel>({ include_docs: true }).then(result => {
    setTaskState({ tasks: result.rows.map(a => a.doc) });
  });
};

const taskPipelines = [
  () => {
    dumpDBToUI();
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
  createEffect(() => {
    setTaskState({
      tags: R.pipe(
        R.map((task: TaskModel) => R.keys(task.tags)),
        R.flatten,
        R.uniq,
        R.map(text => {
          const existingTag = sample(() =>
            taskState.tags.find(tag => tag.text === text),
          );

          if (existingTag) {
            return existingTag;
          }

          return {
            text,
            active: false,
          };
        }),
      )(superTagTasksSelector()),
    });
  });

  taskPipelines.forEach(pipeline => {
    pipeline();
  });
}

export { activateTaskPipelines };
