import { Dispatch } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { collection } from "../backend";

type User = {
  nickname: string;
  isGuest: boolean;
};
export type AppState = {
  user?: User;
};

const initialState: AppState = {};

type SetUserAction = {
  type: "SET_USER";
  payload: User;
};
const setUser = (user: User): SetUserAction => ({
  type: "SET_USER",
  payload: user
});

/*
an "asynchronous" action - action creator returns function insetad of object
*/
export const loginOrSignUp = (nickname: string) => async (
  dispatch: Dispatch
) => {
  /* 
    firebase call should be done here,
    once completed - "synchronos" redux action should be dispatched 
  */
  const usersCollection = await collection("users");
  const user = await usersCollection.where("nickname", "==", nickname).get();
  if (user.empty) {
    dispatch(
      setUser({
        nickname: "guest",
        isGuest: true
      })
    );
  }
};

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
