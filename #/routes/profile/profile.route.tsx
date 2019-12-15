import { ArticlePreviewComponent } from '#/components/article-preview/article-preview.component';
import { UserInfoComponent } from '#/components/user-info/user-info.component';
import { profilePipelines } from '#/modules/profile/profile.pipelines';
import { profileState } from '#/modules/profile/profile.state';

export function ProfileRoute() {
  profilePipelines.getProfileDataPipeline();

  return (
    <div class="profile-page">
      <UserInfoComponent data={profileState.profileData} />

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link active" href="">
                    My Articles
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            <ArticlePreviewComponent
              data={{
                author: {
                  bio: null,
                  following: false,
                  image:
                    'https://static.productionready.io/images/smiley-cyrus.jpg',
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

            <ArticlePreviewComponent
              data={{
                author: {
                  bio: null,
                  following: false,
                  image:
                    'https://static.productionready.io/images/smiley-cyrus.jpg',
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
          </div>
        </div>
      </div>
    </div>
  );
}
