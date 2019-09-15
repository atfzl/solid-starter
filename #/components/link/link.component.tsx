import { linkPipeline } from './link.pipeline';

type Props = JSX.IntrinsicElements['a'];

function Link(props: Props) {
  const { children, className, ref, ...rest } = props;

  return (
    <a
      {...rest}
      forwardRef={(element: HTMLAnchorElement) => {
        linkPipeline(element);

        if (ref) {
          (ref as any)(element);
        }
      }}
      className={(void 0, props.className)}
    >
      {(void 0, props.children)}
    </a>
  );
}

export default Link;
