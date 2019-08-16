import { history, location } from '#/router';
import { fromEvent } from 'rxjs';
import { createEffect } from 'solid-js';

export function appHeaderPipeline(element: HTMLElement) {
  fromEvent(element, 'click').subscribe(e => {
    e.preventDefault();

    history.push('/');
  });

  createEffect(() => {
    const pathname = location();

    if (!element) {
      return;
    }

    if (pathname === '/') {
      element.style.transform = 'translate(-565px, -160px) scale(0.7)';
    } else {
      element.style.transform = 'none';
    }
  });
}
