import { createState } from 'solid-js';

interface State {
  tasks: [];
}

const [taskState, setTaskState] = createState<State>({ tasks: [] });

export { taskState, setTaskState };
