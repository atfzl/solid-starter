import { SuperTag } from '#/models/task.model';
import { css } from 'emotion';

interface Props {
  children: string;
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
