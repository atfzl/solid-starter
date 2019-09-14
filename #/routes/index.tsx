import { css, cx } from 'emotion';

function Routes() {
  return (
    <div
      className={css`
        display: flex;
        height: 100%;
      `}
    >
      <div
        className={css`
          flex: 0 0 240px;
          background-color: #f9fafa;
          padding: 20px 16px;
        `}
      >
        <div
          className={css`
            font-weight: 500;
          `}
        >
          <div
            className={css`
              display: flex;
            `}
          >
            <i className={cx('material-icons')}>inbox</i>
            <div
              className={css`
                margin-left: 6px;
              `}
            >
              Inbox
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          padding: 72px 48px 0 48px;
          width: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <div
          className={css`
            width: 100%;
            max-width: 1000px;
          `}
        >
          body
        </div>
      </div>
    </div>
  );
}

export default Routes;
