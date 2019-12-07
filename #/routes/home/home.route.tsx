import { ArticlePreviewComponent } from '#/components/article-preview/article-preview.component';
import { homeActions } from '#/modules/home/home.actions';
import { homePipelines } from '#/modules/home/home.pipelines';
import { homeState } from '#/modules/home/home.state';
import * as cx from 'classnames';
import { For } from 'solid-js/dom';

export function HomeRoute() {
  homePipelines.getTagsPipeline();
  homePipelines.getFeedArticlesPipeline();

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
                    })}
                    onClick={() => {
                      homeActions.setSelectedFeed('personal');
                    }}
                    href="#/"
                  >
                    Your Feed
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    className={cx('nav-link', {
                      active: homeState.selectedFeed === 'global',
                    })}
                    href="#/"
                    onClick={() => {
                      homeActions.setSelectedFeed('global');
                    }}
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
