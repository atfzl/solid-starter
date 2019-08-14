import { createState } from 'solid-js';

const [loginState, setLoginState] = createState({
  username: '',
  password: '',
});

export { loginState, setLoginState };
