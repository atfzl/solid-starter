import update, { Spec } from 'immutability-helper';

export function immutableUpdate<T>(spec: Spec<T>) {
  return function(state: T) {
    return update<T>(state, spec);
  };
}
