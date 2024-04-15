import { ActionType } from "../action-types";
import { Post } from "../reducers/repositoriesReducer";
export interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
export interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: Post[];
}
export interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export interface ShowThreadsAction {
  type: ActionType.SHOW_THREADS;
}
export interface ShowThreadsSuccessAction {
  type: ActionType.SHOW_THREADS_SUCCESS;
  payload: Post[];
}
export interface ShowThreadsErrorAction {
  type: ActionType.SHOW_THREADS_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesErrorAction
  | SearchRepositoriesSuccessAction
  | ShowThreadsAction
  | ShowThreadsSuccessAction
  | ShowThreadsErrorAction;
