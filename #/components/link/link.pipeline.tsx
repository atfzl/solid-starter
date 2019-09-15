import { history } from '#/utils/router.util';
import { fromEvent } from 'rxjs';

export function linkPipeline(anchorElement: HTMLAnchorElement) {
  fromEvent(anchorElement, 'click').subscribe(e => {
    e.preventDefault();

    const anchorElement = e.target as HTMLAnchorElement;

    const href = anchorElement.getAttribute('href');

    if (!href) {
      return;
    }

    history.push(href);
  });
}
