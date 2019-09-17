import { css, cx } from 'emotion';

type DivProps = JSX.IntrinsicElements['div'];

interface Props extends DivProps {
  type?: 'active' | 'greyed' | 'task';
}

function TagComponent(props: Props) {
  const { type, className, ...rest } = props;

  return (
    <div
      {...(void 0, rest)}
      className={
        (void 0,
        cx(
          css`
            cursor: initial;
            user-select: none;
            padding: 0 8px;
            border-radius: 15px;
            display: inline-block;
            font-size: 1.3rem;
            font-weight: 600;
            margin-right: 4px;
            background-color: ${(() => {
              switch (props.type) {
                case 'active':
                  return '#3b88fd';
                case 'greyed':
                  return '#b4b7ba';
                default:
                  return 'transparent';
              }
            })()};
            color: ${(() => {
              switch (props.type) {
                case 'active':
                case 'greyed':
                  return '#fff';
                case 'task':
                  return '#aaadb0';
                default:
                  return '#81878e';
              }
            })()};
            border-width: 1px;
            border-style: solid;
            border-color: ${(() => {
              switch (props.type) {
                case 'task':
                  return '#c5c7c9';
                default:
                  return 'transparent';
              }
            })()};
            :hover {
              border-color: ${(() => {
                switch (props.type) {
                  case 'active':
                  case 'greyed':
                  case 'task':
                    return '';
                  case undefined:
                    return '#b4b7ba';
                  default:
                    return 'transparent';
                }
              })()};
            }
          `,
          props.className,
        ))
      }
    ></div>
  );
}

export default TagComponent;
