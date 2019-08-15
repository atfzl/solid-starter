import { fromEvent } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { loginState, setLoginState } from './state';

export function formPipeline(formElement: HTMLFormElement) {
  fromEvent(formElement, 'submit')
    .pipe(
      tap(e => e.preventDefault()),
      tap(() => setLoginState({ status: 'checking' })),
      delay(2000),
      map(() => {
        return (
          loginState.password === 'Foobar2000#' &&
          loginState.username === 'atif5801@gmail.com'
        );
      }),
    )
    .subscribe(isLoggedIn => {
      if (isLoggedIn) {
        setLoginState({ status: 'success' });
        console.log('login success');
      } else {
        setLoginState({ status: 'failure' });
      }
    });
}

export function usernamePipeline(element: HTMLInputElement) {
  fromEvent<Event & { currentTarget: HTMLInputElement }>(
    element,
    'change',
  ).subscribe(e => {
    setLoginState({ username: e.currentTarget.value });
  });
}

export function passwordPipeline(element: HTMLInputElement) {
  fromEvent<Event & { currentTarget: HTMLInputElement }>(
    element,
    'change',
  ).subscribe(e => {
    setLoginState({ password: e.currentTarget.value });
  });
}
