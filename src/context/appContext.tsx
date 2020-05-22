import React from "react";
import { createCtx } from "../utilities/createCtx";
import { appReducer } from "../reducers/appReducer";
import { dummyData } from "../sampleData/data";
import { type } from "os";
// import { State, Action } from "../@types/app";

// app state type
export type AppState = {
  isSideMenuOpen: boolean;
  categories: string[];
  dummyData: Array<{ text: string; notes: string; categories: string[] }>;
  isNewWordDialogOpened: boolean;
};

// app action type
type TOGGLE_SIDE_MANU = "TOGGLE_SIDE_MANU";
type OPEN_NEW_WORD_DIALOG = "OPEN_NEW_WORD_DIALOG";

type actionType = {
  TOGGLE_SIDE_MANU: TOGGLE_SIDE_MANU;
  OPEN_NEW_WORD_DIALOG: OPEN_NEW_WORD_DIALOG;
};

export const AppActionType: actionType = {
  TOGGLE_SIDE_MANU: "TOGGLE_SIDE_MANU",
  OPEN_NEW_WORD_DIALOG: "OPEN_NEW_WORD_DIALOG",
};

export type AppAction =
  | { type: TOGGLE_SIDE_MANU }
  | { type: OPEN_NEW_WORD_DIALOG };

// app context
const categories: string[] = dummyData
  .flatMap((item) => item.categories)
  .reduce((acc, cur) => {
    if (cur !== "Inbox" && acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, new Array<string>());

const initialState: AppState = {
  isSideMenuOpen: false,
  categories: categories,
  dummyData: dummyData,
  isNewWordDialogOpened: false,
};

export const [AppContext, AppCtxProvider] = createCtx<AppState, AppAction>(
  appReducer,
  initialState
);

export function AppContextProvider(props: React.PropsWithChildren<{}>) {
  return <AppCtxProvider>{props.children}</AppCtxProvider>;
}
