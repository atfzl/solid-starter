import { formSubmitPipeline } from '#/modules/login/pipeline';
import { loginState, setLoginState } from '#/modules/login/state';
import { css } from 'emotion';

function Login() {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <div
        className={css`
          margin-top: -12rem;
        `}
      >
        <h1>Login</h1>
        <form
          forwardRef={formSubmitPipeline}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            value={(void 0, loginState.username)}
            onChange={e => {
              const target = e.target as HTMLInputElement;

              setLoginState({ username: target.value });
            }}
            placeholder="id"
          />
          <input
            value={(void 0, loginState.password)}
            onChange={e => {
              const target = e.target as HTMLInputElement;

              setLoginState({ password: target.value });
            }}
            placeholder="password"
            type="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
