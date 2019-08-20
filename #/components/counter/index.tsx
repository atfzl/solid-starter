import { css } from 'emotion';
import { createState, onCleanup } from 'solid-js';

function Counter() {
  const [state, setState] = createState({ counter: 0 });

  const intervalId = setInterval(() => {
    setState(state => ({ counter: state.counter + 1 }));
  }, 1000);

  onCleanup(() => {
    clearInterval(intervalId);
  });

  return (
    <div
      className={css`
        display: flex;
        background-color: beige;
        padding: 16px;
      `}
    >
      <div
        className={css`
          font-weight: 600;
          margin-right: 6px;
        `}
      >
        Counter:
      </div>
      <div
        className={css`
          color: cadetblue;
        `}
      >
        {(void 0, state.counter)}
      </div>
    </div>
  );
}

export default Counter;
