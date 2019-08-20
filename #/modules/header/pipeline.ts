import { location } from '#/utils/router';
import { createEffect } from 'solid-js';

export function appHeaderPipeline(element: HTMLElement) {
  createEffect(() => {
    const pathname = location();

    if (pathname === '/') {
      element.style.transform = 'translate(-565px, -160px) scale(0.7)';
    } else {
      element.style.transform = 'none';
    }
  });
}
