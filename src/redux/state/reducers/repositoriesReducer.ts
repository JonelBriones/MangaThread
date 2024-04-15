import { ActionType } from "../action-types";
import { Action } from "../actions";

export type Post = {
  username: string;
  id: number;
  manga: string;
  text: string;
  replies: never[];
  likes: never[];
};

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: Post[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SHOW_THREADS:
      return { loading: true, error: null, data: [] };
    case ActionType.SHOW_THREADS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SHOW_THREADS_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
