import { homeLoadPipeline } from '#/modules/home/pipeline';
import { homeState } from '#/modules/home/state';
import { css } from 'emotion';
import { For, Show } from 'solid-js/dom';

function Home() {
  homeLoadPipeline();

  return (
    <div
      className={css`
        padding-top: 68px;
      `}
    >
      <div>
        <Show when={(void 0, !!homeState.topRatedMovies)}>
          <b>Top Rated</b>
          <div>
            <For each={homeState.topRatedMovies!.results}>
              {row => <div>{row.title}</div>}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
}

export default Home;
