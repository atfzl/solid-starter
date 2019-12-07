import cx from 'classnames';
import { For, Show } from 'solid-js/dom';

interface Props {
  limit: number;
  offset?: number;
  totalLength?: number;
  onButtonClick: (newOffset: number) => void;
}

export function PaginationComponent(props: Props) {
  return (
    <nav>
      <Show
        when={
          !(
            props.offset === undefined ||
            !props.totalLength ||
            props.totalLength <= props.limit
          )
        }
      >
        <ul className="pagination">
          <For
            each={Array(Math.ceil(props.totalLength! / props.limit))
              .fill(0)
              .map((_v, i) => i)}
          >
            {n => (
              <li
                className={cx('page-item', {
                  active: Math.floor(props.offset! / props.limit) === n,
                })}
              >
                <a
                  href="#/"
                  onClick={() => props.onButtonClick(n * props.limit)}
                  className="page-link"
                >
                  {n + 1}
                </a>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </nav>
  );
}
