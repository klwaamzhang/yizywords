import React from "react";
import { createCtx } from "../utilities/createCtx";
import { appReducer } from "../reducers/appReducer";
import { dummyData } from "../sampleData/data";
// import { State, Action } from "../@types/app";

export interface DummyDataType {
  text: string;
  notes: string;
  categories: string[];
}

// app state type
export type AppState = {
  isSideMenuOpen: boolean;
  categories: string[];
  dummyData: Array<DummyDataType>;
  isNewWordDialogOpened: boolean;
};

// app action type
type TOGGLE_SIDE_MANU = "TOGGLE_SIDE_MANU";
type TOGGLE_NEW_WORD_DIALOG = "TOGGLE_NEW_WORD_DIALOG";
type CREATE_NEW_WORD = "CREATE_NEW_WORD";

type actionType = {
  TOGGLE_SIDE_MANU: TOGGLE_SIDE_MANU;
  TOGGLE_NEW_WORD_DIALOG: TOGGLE_NEW_WORD_DIALOG;
  CREATE_NEW_WORD: CREATE_NEW_WORD;
};

export const AppActionType: actionType = {
  TOGGLE_SIDE_MANU: "TOGGLE_SIDE_MANU",
  TOGGLE_NEW_WORD_DIALOG: "TOGGLE_NEW_WORD_DIALOG",
  CREATE_NEW_WORD: "CREATE_NEW_WORD",
};

export type AppAction =
  | { type: TOGGLE_SIDE_MANU }
  | { type: TOGGLE_NEW_WORD_DIALOG }
  | { type: CREATE_NEW_WORD; payload: DummyDataType };

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
