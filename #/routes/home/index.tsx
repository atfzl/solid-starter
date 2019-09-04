import Spinner from '#/components/spinner';
import { homeLoadPipeline } from '#/modules/home/pipeline';
import { homeState } from '#/modules/home/state';
import { css } from 'emotion';
import { For, Match, Switch } from 'solid-js/dom';

function Home() {
  homeLoadPipeline();

  return (
    <div
      className={css`
        padding: 68px;
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        className={css`
          padding: 16px;
        `}
      >
        <Switch>
          <Match when={(void 0, !homeState.topRatedMovies)}>
            <Spinner />
          </Match>
          <Match when={(void 0, !!homeState.topRatedMovies)}>
            <div
              className={css`
                font-size: 20px;
                font-weight: 600;
              `}
            >
              Top Rated
            </div>
            <div>
              <For each={homeState.topRatedMovies!.results}>
                {row => (
                  <div
                    className={css`
                      padding-top: 4px;
                    `}
                  >
                    {row.title}
                  </div>
                )}
              </For>
            </div>
          </Match>
        </Switch>
      </div>
      <div
        className={css`
          padding: 16px;
        `}
      >
        <Switch>
          <Match when={(void 0, !homeState.nowPlaying)}>
            <Spinner />
          </Match>
          <Match when={(void 0, !!homeState.nowPlaying)}>
            <div
              className={css`
                font-size: 20px;
                font-weight: 600;
              `}
            >
              Now Playing
            </div>
            <div>
              <For each={homeState.nowPlaying!.results}>
                {row => (
                  <div
                    className={css`
                      padding-top: 4px;
                    `}
                  >
                    {row.title}
                  </div>
                )}
              </For>
            </div>
          </Match>
        </Switch>
      </div>
    </div>
  );
}

export default Home;
