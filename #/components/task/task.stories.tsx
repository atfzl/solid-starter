import { storiesOf } from '@storybook/html';
import TaskComponent, { Props } from './task.component';

storiesOf('TaskComponent', module).add('default', () => {
  const data: Props['data'] = {
    _id: '12',
    _rev: '',
    text: 'buy ktm insurance policy',
    checklists: [],
    tags: {
      home: true,
    },
    superTags: {
      inbox: true,
    },
  };

  return <TaskComponent onCheckboxClick={console.log} data={data} />;
});
