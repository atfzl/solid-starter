import Tag from '#/components/tag/tag.component';
import TaskComponent from '#/components/task/task.component';
import { taskActions } from '#/modules/task/task.action';
import { activateTaskPipelines } from '#/modules/task/task.pipelines';
import { taskState } from '#/modules/task/task.state';
import { css } from 'emotion';
import { afterEffects } from 'solid-js';
import { For } from 'solid-js/dom';

function SuperTagView() {
  afterEffects(() => {
    activateTaskPipelines();
  });

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
        {taskState.superTag}
      </div>
      <div
        className={css`
          margin-bottom: 36px;
          color: grey;
        `}
      >
        <Tag
          onClick={taskActions.onAllTagClick}
          type={taskState.tags.every(tag => !tag.active) ? 'greyed' : undefined}
        >
          All
        </Tag>
        <For each={taskState.tags}>
          {tag => (
            <Tag
              onClick={() => taskActions.onTagClick(tag.text)}
              type={tag.active ? 'active' : undefined}
            >
              <div>{tag.text}</div>
            </Tag>
          )}
        </For>
      </div>
      <div>
        <For
          each={taskState.tasks
            .filter(task => task.superTags[taskState.superTag])
            .filter(task => {
              const activeTagsText = taskState.tags
                .filter(tag => tag.active)
                .map(tag => tag.text);

              return activeTagsText.every(tagText => task.tags[tagText]);
            })}
        >
          {task => (
            <TaskComponent
              onCheckboxClick={taskActions.onCheckboxClick}
              data={task}
            />
          )}
        </For>
      </div>
    </div>
  );
}

export default SuperTagView;
