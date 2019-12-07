import { ArticlePreviewComponent } from '#/components/article-preview/article-preview.component';
import { homeActions } from '#/modules/home/home.actions';
import { homeState } from '#/modules/home/home.state';
import * as cx from 'classnames';
import { For } from 'solid-js/dom';

export function HomeRoute() {
  homeActions.fetchAndSetAllTagsState();
  homeActions.fetchAndSetGlobalFeedState();

  return (
    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a
                    className={cx('nav-link', {
                      active: homeState.selectedFeed === 'personal',
                      disabled: homeState.selectedFeed !== 'personal',
                    })}
                    href=""
                  >
                    Your Feed
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    className={cx('nav-link', {
                      active: homeState.selectedFeed === 'global',
                      disabled: homeState.selectedFeed !== 'global',
                    })}
                    href=""
                  >
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <For each={homeState.feedArticles}>
              {articleData => <ArticlePreviewComponent data={articleData} />}
            </For>
          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                <For each={homeState.tags}>
                  {tagData => (
                    <a href="" class="tag-pill tag-default">
                      {tagData}
                    </a>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
