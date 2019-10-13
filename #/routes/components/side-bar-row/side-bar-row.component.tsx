import { css, cx } from 'emotion';

interface Props {
  children: string;
  icon: string;
}

function SideBarRow(props: Props) {
  return (
    <div
      className={css`
        display: flex;
        margin-bottom: 16px;
        width: 100%;
        cursor: pointer;
      `}
    >
      <i className={cx('material-icons')}>{props.icon}</i>
      <div
        className={css`
          margin-left: 6px;
        `}
      >
        {props.children}
      </div>
    </div>
  );
}

export default SideBarRow;
