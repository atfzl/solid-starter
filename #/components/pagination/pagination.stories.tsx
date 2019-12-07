import { storiesOf } from '@storybook/html';
import { PaginationComponent } from './pagination.component';

storiesOf('PaginationComponent', module).add('default', () => {
  return (
    <PaginationComponent
      limit={10}
      offset={30}
      totalLength={500}
      onButtonClick={console.log}
    />
  );
});
