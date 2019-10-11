import { history } from '#/utils/router.util';

type Props = JSX.IntrinsicElements['a'];

function LinkComponent(props: Props) {
  const { children, className, ref, ...rest } = props;

  return (
    <a
      {...rest}
      onClick={e => {
        e.preventDefault();

        const anchorElement = e.target as HTMLAnchorElement;

        const href = anchorElement.getAttribute('href');

        if (!href) {
          return;
        }

        history.push(href);
      }}
      className={(void 0, props.className)}
    >
      {(void 0, props.children)}
    </a>
  );
}

export default LinkComponent;
