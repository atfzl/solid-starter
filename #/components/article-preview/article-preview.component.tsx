import { ArticleModel } from '#/models/model';
import { For } from 'solid-js/dom';

interface Props {
  data: ArticleModel;
}

export function ArticlePreviewComponent(props: Props) {
  return (
    <div class="article-preview">
      <div class="article-meta">
        <a href={`#/@${props.data.author.username}`}>
          <img src={props.data.author.image} />
        </a>
        <div class="info">
          <a href={`#/@${props.data.author.username}`} class="author">
            {props.data.author.username}
          </a>
          <span class="date">{props.data.createdAt}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
          <i class="ion-heart"></i> {props.data.favoritesCount}
        </button>
      </div>
      <a href="" class="preview-link">
        <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
        <span>Read more...</span>
        <ul class="tag-list">
          <For each={props.data.tagList}>
            {tag => <li class="tag-default tag-pill tag-outline">{tag}</li>}
          </For>
        </ul>
      </a>
    </div>
  );
}