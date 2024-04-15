import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";
import { FAKE_DATA_POSTS } from "../../../data/data";

export const displayThreads = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOW_THREADS,
    });
    const post = FAKE_DATA_POSTS.map((result: any) => {
      return result;
    });
    try {
      dispatch({
        type: ActionType.SHOW_THREADS_SUCCESS,
        payload: post,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SHOW_THREADS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
