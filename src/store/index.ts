import { Dispatch } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

type User = {
  nickname: string;
};
export type AppState = {
  user?: User;
};

const initialState: AppState = {};

/*
an "asynchronous" action - action creator returns function insetad of object
*/
export const loginOrSignUp = (nickname: string) => (dispatch: Dispatch) => {
  /* 
    firebase call should be done here,
    once completed - "synchronos" redux action should be dispatched 
  */
  dispatch(
    setUser({
      nickname
    })
  );
};

type SetUserAction = {
  type: "SET_USER";
  payload: User;
};
const setUser = (user: User): SetUserAction => ({
  type: "SET_USER",
  payload: user
});

type AppAction = SetUserAction;

export const reducer = (
  state: AppState = initialState,
  { type, payload }: AppAction
): AppState => {
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
