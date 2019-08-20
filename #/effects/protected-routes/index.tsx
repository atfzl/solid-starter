import { loginState } from '#/modules/login/state';
import { history, location } from '#/utils/router';
import { createEffect } from 'solid-js';

createEffect(() => {
  if (location() === '/login') {
    return;
  }

  if (loginState.status !== 'success') {
    history.push('/login');
  }
});
