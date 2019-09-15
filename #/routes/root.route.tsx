import { css, cx } from 'emotion';
import SuperTagView from './components/super-tag-view/super-tag-view.component';

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
          padding: 36px 20px 0 20px;
          border-right: 1px solid #f1f6f7;
        `}
      >
        <div
          className={css`
            font-weight: 500;
            display: flex;
            align-items: center;
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
          padding: 72px 52px 0 52px;
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
          <SuperTagView />
        </div>
      </div>
    </div>
  );
}

export default Routes;
