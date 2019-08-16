import { linkPipeline } from './pipeline';

type Props = JSX.HTMLAttributes<HTMLAnchorElement>;

function Link(props: Props) {
  const { children, ref, ...rest } = props;

  return (
    <a
      forwardRef={(element: HTMLAnchorElement) => {
        linkPipeline(element);

        if (ref) {
          (ref as any)(element);
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Link;
