import { ArticlePreviewComponent } from '#/components/article-preview/article-preview.component';
import { UserInfoComponent } from '#/components/user-info/user-info.component';
import { profileActions } from '#/modules/profile/profile.actions';
import { profilePipelines } from '#/modules/profile/profile.pipelines';
import { profileState } from '#/modules/profile/profile.state';
import cx from 'classnames';
import { For } from 'solid-js/dom';

export function ProfileRoute() {
  profilePipelines.getProfileDataPipeline();
  profilePipelines.getProfileArticlesPipeline();

  return (
    <div class="profile-page">
      <UserInfoComponent data={profileState.profileData} />

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a
                    class={cx('nav-link', {
                      active: profileState.selectedArticles === 'personal',
                    })}
                    href="javascript:void"
                    onClick={() =>
                      profileActions.setSelectedArticle('personal')
                    }
                  >
                    My Articles
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class={cx('nav-link', {
                      active: profileState.selectedArticles === 'favorited',
                    })}
                    href="javascript:void"
                    onClick={() =>
                      profileActions.setSelectedArticle('favorited')
                    }
                  >
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            <For each={profileState.articles}>
              {articleData => <ArticlePreviewComponent data={articleData} />}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
