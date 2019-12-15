import { ProfileModel } from '#/models/model';
import { Show } from 'solid-js/dom';

interface Props {
  data?: ProfileModel;
}

export function UserInfoComponent(props: Props) {
  return (
    <Show when={!!props.data}>
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <img src={props.data!.image} class="user-img" />
              <h4>{props.data!.username}</h4>
              <p>{props.data!.bio}</p>
              <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-plus-round"></i>
                &nbsp; Follow {props.data!.username}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
}
