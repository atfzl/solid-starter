import update from 'immutability-helper';
import * as R from 'ramda';
import { setTaskState, taskState } from './task.state';

export const taskActions = {
  onTagClick(tagText: string) {
    const tagIndex = R.findIndex(t => t.text === tagText, taskState.tags);

    const tag = taskState.tags[tagIndex];

    setTaskState(state =>
      update(state, {
        tags: {
          [tagIndex]: {
            $merge: {
              active: !tag.active,
            },
          },
        },
      }),
    );
  },
};
