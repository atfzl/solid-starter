import { storiesOf } from '@storybook/html';
import Link from './link.component';

storiesOf('LinkComponent', module).add('default', () => {
  return <Link href="https://duckduckgo.com">foobar</Link>;
});
