import Tag from '#/components/tag/tag.component';
import { TaskDoc } from '#/models/task.model';
import { css } from 'emotion';
import { For } from 'solid-js/dom';

export interface Props {
  data: TaskDoc;
  onCheckboxClick: (id: string, checked: boolean) => void;
}

function TaskComponent(props: Props) {
  const inputId = `task-${props.data._id}`;

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
        onChange={e => {
          props.onCheckboxClick(props.data._id, (e.target as any).checked);
        }}
        type="checkbox"
        checked={props.data.checked}
        id={inputId}
      />
      <label
        for={inputId}
        className={css`
          display: flex;
          margin-left: 6px;
        `}
      >
        {props.data.text}
      </label>
      <For each={Object.keys(props.data.tags)}>
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
