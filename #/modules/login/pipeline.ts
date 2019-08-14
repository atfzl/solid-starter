import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { loginState } from './state';

export function formSubmitPipeline(formElement: HTMLFormElement) {
  fromEvent(formElement, 'submit')
    .pipe(
      filter(() => {
        return (
          loginState.password === 'Foobar2000#' &&
          loginState.username === 'atif5801@gmail.com'
        );
      }),
    )
    .subscribe(() => {
      console.log('login success');
    });
}
