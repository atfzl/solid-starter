import { immutableUpdate } from '#/utils/immutable-update.util';
import * as R from 'ramda';
import { setTaskState, taskState } from './task.state';

export const taskActions = {
  onTagClick(tagText: string) {
    const tagIndex = R.findIndex(t => t.text === tagText, taskState.tags);

    const spec: any = {
      tags: {},
    };

    taskState.tags.forEach((tag, i) => {
      spec.tags[i] = {
        $merge: {
          active: i === tagIndex ? !tag.active : false,
        },
      };
    });

    setTaskState(immutableUpdate(spec));
  },
  onAllTagClick() {
    const spec: any = {
      tags: {},
    };

    taskState.tags.forEach((_tag, i) => {
      spec.tags[i] = {
        $merge: {
          active: false,
        },
      };
    });

    setTaskState(immutableUpdate(spec));
  },
};
