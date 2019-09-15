import Tag from '#/components/tag';
import TaskComponent from '#/components/task';
import { taskActions } from '#/modules/task/task.action';
import { taskState } from '#/modules/task/task.state';
import { css } from 'emotion';
import { For } from 'solid-js/dom';

function SuperTagView() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        className={css`
          font-size: 2.4rem;
          font-weight: 600;
          margin-bottom: 8px;
          user-select: none;
        `}
      >
        Inbox
      </div>
      <div
        className={css`
          margin-bottom: 36px;
          color: grey;
        `}
      >
        <For each={(void 0, taskState.tags)}>
          {tag => (
            <Tag
              onClick={() => taskActions.onTagClick(tag.text)}
              type={
                (void 0,
                tag.active
                  ? tag.text === 'All'
                    ? 'greyed'
                    : 'active'
                  : undefined)
              }
            >
              {(void 0, tag.text)}
            </Tag>
          )}
        </For>
      </div>
      <div>
        <For each={(void 0, taskState.tasks)}>
          {task => <TaskComponent data={(void 0, task)} />}
        </For>
      </div>
    </div>
  );
}

export default SuperTagView;
