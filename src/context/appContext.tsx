import React from "react";
import { createCtx } from "../utilities/createCtx";
import { appReducer } from "../reducers/appReducer";
import { dummyData } from "../sampleData/data";
// import { State, Action } from "../@types/app";

// app state type
export type AppState = {
  isSideMenuOpen: boolean;
  dummyData: Array<{ text: string; notes: string; categories: string[] }>;
};

// app action type
type TOGGLE_SIDE_MANU = "TOGGLE_SIDE_MANU";

type actionType = {
  TOGGLE_SIDE_MANU: TOGGLE_SIDE_MANU;
};

export const AppActionType: actionType = {
  TOGGLE_SIDE_MANU: "TOGGLE_SIDE_MANU",
};

export type AppAction = { type: TOGGLE_SIDE_MANU };

// app context
const initialState: AppState = { isSideMenuOpen: false, dummyData: dummyData };

export const [AppContext, AppCtxProvider] = createCtx<AppState, AppAction>(
  appReducer,
  initialState
);

export function AppContextProvider(props: React.PropsWithChildren<{}>) {
  return <AppCtxProvider>{props.children}</AppCtxProvider>;
}
