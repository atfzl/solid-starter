import { storiesOf } from '@storybook/html';
import { ArticlePreviewComponent } from './article-preview.component';

storiesOf('ArticlePreviewComponent', module).add('default', () => {
  return (
    <ArticlePreviewComponent
      data={{
        author: {
          bio: null,
          following: false,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          username: 'satish2328',
        },
        body: 'test',
        createdAt: '2019-12-06T20:46:04.207Z',
        description: 'test',
        favorited: false,
        favoritesCount: 1,
        slug: 'test-azailf',
        tagList: [],
        title: 'test',
        updatedAt: '2019-12-06T20:46:04.207Z',
      }}
    />
  );
});
