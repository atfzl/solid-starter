import Tag from '#/components/tag/tag.component';
import TaskComponent from '#/components/task/task.component';
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
        {() => (
          <Tag
            onClick={taskActions.onAllTagClick}
            type={
              (void 0,
              taskState.tags.filter(tag => tag.active).length === 0
                ? 'greyed'
                : undefined)
            }
          >
            All
          </Tag>
        )}
        <For each={(void 0, taskState.tags)}>
          {tag => (
            <Tag
              onClick={() => taskActions.onTagClick(tag.text)}
              type={(void 0, tag.active ? 'active' : undefined)}
            >
              {(void 0, tag.text)}
            </Tag>
          )}
        </For>
      </div>
      <div>
        <For
          each={
            (void 0,
            taskState.tasks.filter(task => {
              const activeTagsText = taskState.tags
                .filter(tag => tag.active)
                .map(tag => tag.text);

              return activeTagsText.every(tagText => task.tags[tagText]);
            }))
          }
        >
          {task => <TaskComponent data={(void 0, task)} />}
        </For>
      </div>
    </div>
  );
}

export default SuperTagView;
