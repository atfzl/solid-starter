import { ArticlePreviewComponent } from '#/components/article-preview/article-preview.component';
import { PaginationComponent } from '#/components/pagination/pagination.component';
import { homeActions } from '#/modules/home/home.actions';
import { homePipelines } from '#/modules/home/home.pipelines';
import { homeState } from '#/modules/home/home.state';
import * as cx from 'classnames';
import { For, Show } from 'solid-js/dom';

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
                <Show
                  when={
                    !['global', 'personal'].includes(homeState.selectedFeed)
                  }
                >
                  <li class="nav-item">
                    <a className="nav-link active" href="#/">
                      <i class="ion-pound"></i>{' '}
                      {homeState.selectedFeed.slice(1)}
                    </a>
                  </li>
                </Show>
              </ul>
            </div>

            <For each={homeState.feedArticles}>
              {articleData => <ArticlePreviewComponent data={articleData} />}
            </For>

            <PaginationComponent
              limit={homeState.limit}
              offset={homeState.offset}
              totalLength={homeState.articlesLength}
              onButtonClick={homeActions.setOffset}
            />
          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                <For each={homeState.tags}>
                  {tagData => (
                    <a
                      href="#/"
                      class="tag-pill tag-default"
                      onClick={() => {
                        homeActions.setSelectedTag(tagData);
                      }}
                    >
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
