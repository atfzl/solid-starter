import { css } from 'emotion';

function Spinner() {
  return (
    <div
      className={css`
        margin-top: 16px;
      `}
    >
      loading...
    </div>
  );
}

export default Spinner;
