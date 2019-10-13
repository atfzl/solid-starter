import { SuperTag } from '#/models/task.model';
import { css, cx } from 'emotion';

interface Props {
  children: string;
  icon: string;
  onClick: (id: SuperTag) => void;
  id: SuperTag;
}

function SideBarRow(props: Props) {
  return (
    <div
      className={css`
        display: flex;
        margin-bottom: 16px;
        cursor: default;
      `}
      onClick={() => props.onClick(props.id)}
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
