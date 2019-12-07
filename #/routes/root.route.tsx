import { Match, Switch } from 'solid-js/dom';
import { HomeRoute } from './home/home.route';

interface Props {
  location: string;
}

export function RootRoute(props: Props) {
  return (
    <Switch>
      <Match when={props.location === '#/'}>
        <HomeRoute />
      </Match>
      <Match when={props.location === '#/settings'}>
        <div>setting</div>
      </Match>
      <Match when={props.location.startsWith('#/@')}>
        <div>author details</div>
      </Match>
    </Switch>
  );
}
