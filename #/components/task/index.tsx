import Tag from '#/components/tag';
import { TaskModel } from '#/models/Task';
import { css } from 'emotion';
import { For } from 'solid-js/dom';

export interface Props {
  data: TaskModel;
}

function TaskComponent(props: Props) {
  return (
    <div
      className={css`
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        user-select: none;
      `}
    >
      <input
        className={css`
          position: relative;
          top: -1px;
        `}
        type="checkbox"
        checked={(void 0, props.data.checked)}
        id="task1"
      />
      <label
        for="task1"
        className={css`
          display: flex;
          margin-left: 6px;
        `}
      >
        {(void 0, props.data.text)}
      </label>
      <For each={(void 0, Object.keys(props.data.tags))}>
        {tag => (
          <Tag
            className={css`
              font-size: 1rem;
              margin-left: 8px;
            `}
            type="task"
          >
            {tag}
          </Tag>
        )}
      </For>
    </div>
  );
}

export default TaskComponent;
