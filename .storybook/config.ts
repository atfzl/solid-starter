import '#/style';
import { addDecorator, configure } from '@storybook/html';
import { createRoot } from 'solid-js';

// automatically import all files ending in *.stories.tsx
const req = require.context('../#', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => {
  return createRoot(() => story());
});

configure(loadStories, module);
