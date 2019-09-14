import Tag from '#/components/tag';
import TaskComponent from '#/components/task';
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
        <Tag type="greyed">All</Tag>
        <Tag>Home</Tag>
        <Tag type="active">next</Tag>
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
