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
  isWordDialogOpened: boolean;
};

// app action type
type TOGGLE_SIDE_MANU = "TOGGLE_SIDE_MANU";
type TOGGLE_NEW_WORD_DIALOG = "TOGGLE_NEW_WORD_DIALOG";
type CREATE_NEW_WORD = "CREATE_NEW_WORD";
type UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
type DELETE_WORD_ITEM = "DELETE_WORD_ITEM";

type actionType = {
  TOGGLE_SIDE_MANU: TOGGLE_SIDE_MANU;
  TOGGLE_NEW_WORD_DIALOG: TOGGLE_NEW_WORD_DIALOG;
  CREATE_NEW_WORD: CREATE_NEW_WORD;
  UPDATE_CATEGORIES: UPDATE_CATEGORIES;
  DELETE_WORD_ITEM: DELETE_WORD_ITEM;
};

export const AppActionType: actionType = {
  TOGGLE_SIDE_MANU: "TOGGLE_SIDE_MANU",
  TOGGLE_NEW_WORD_DIALOG: "TOGGLE_NEW_WORD_DIALOG",
  CREATE_NEW_WORD: "CREATE_NEW_WORD",
  UPDATE_CATEGORIES: "UPDATE_CATEGORIES",
  DELETE_WORD_ITEM: "DELETE_WORD_ITEM",
};

export type AppAction =
  | { type: TOGGLE_SIDE_MANU }
  | { type: TOGGLE_NEW_WORD_DIALOG }
  | { type: CREATE_NEW_WORD; payload: DummyDataType }
  | { type: UPDATE_CATEGORIES }
  | { type: DELETE_WORD_ITEM; payload: number };

// app context
export const populateCategories = (data: DummyDataType[]) => {
  return data
    .flatMap((item) => item.categories)
    .reduce((acc, cur) => {
      if (cur !== "Inbox" && acc.indexOf(cur) === -1) {
        acc.push(cur);
      }
      return acc;
    }, new Array<string>());
};

export const removeAWord = (itemIndex: number, data: DummyDataType[]) => {
  data.splice(itemIndex, 1);
  return data;
};

const initialState: AppState = {
  isSideMenuOpen: false,
  categories: populateCategories(dummyData),
  dummyData: dummyData,
  isWordDialogOpened: false,
};

export const [AppContext, AppCtxProvider] = createCtx<AppState, AppAction>(
  appReducer,
  initialState
);

export function AppContextProvider(props: React.PropsWithChildren<{}>) {
  return <AppCtxProvider>{props.children}</AppCtxProvider>;
}
