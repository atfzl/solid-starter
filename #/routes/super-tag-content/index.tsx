import Tag from '#/components/tag';
import { css } from 'emotion';

function SuperTagContent() {
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
        <Tag>next</Tag>
        <Tag type="active">Home</Tag>
      </div>
      <div>
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
            checked={true}
            id="task1"
          />
          <label
            for="task1"
            className={css`
              display: flex;
              margin-left: 6px;
            `}
          >
            ktm insurance
          </label>
          <Tag
            className={css`
              font-size: 1rem;
              margin-left: 8px;
            `}
            type="task"
          >
            next
          </Tag>
        </div>
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
            id="task2"
          />
          <label
            for="task2"
            className={css`
              display: flex;
              margin-left: 6px;
            `}
          >
            Thailand holiday booking
          </label>
          <Tag
            className={css`
              font-size: 1rem;
              margin-left: 8px;
            `}
            type="task"
          >
            next
          </Tag>
        </div>
      </div>
    </div>
  );
}

export default SuperTagContent;
