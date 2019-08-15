import { createState } from 'solid-js';

export type LoginStatus = 'success' | 'pristine' | 'checking' | 'failure';

interface State {
  username: string;
  password: string;
  status: LoginStatus;
}

const [loginState, setLoginState] = createState<State>({
  username: '',
  password: '',
  status: 'pristine',
});

export { loginState, setLoginState };
