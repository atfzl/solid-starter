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
        Inbox
      </div>
      <div
        className={css`
          margin-bottom: 36px;
          color: grey;
        `}
      >
        <Tag
          onClick={taskActions.onAllTagClick}
          type={
            (void 0,
            taskState.tags.every(tag => !tag.active) ? 'greyed' : undefined)
          }
        >
          All
        </Tag>
        <For each={(void 0, taskState.tags)}>
          {tag => (
            <Tag
              onClick={() => taskActions.onTagClick(tag.text)}
              type={(void 0, tag.active ? 'active' : undefined)}
            >
              <div>{(void 0, tag.text)}</div>
            </Tag>
          )}
        </For>
      </div>
      <div>
        <For
          each={
            (void 0,
            taskState.tasks
              .filter(task => task.superTags[taskState.superTag])
              .filter(task => {
                const activeTagsText = taskState.tags
                  .filter(tag => tag.active)
                  .map(tag => tag.text);

                return activeTagsText.every(tagText => task.tags[tagText]);
              }))
          }
        >
          {task => (
            <TaskComponent
              onCheckboxClick={taskActions.onCheckboxClick}
              data={(void 0, task)}
            />
          )}
        </For>
      </div>
    </div>
  );
}

export default SuperTagView;
