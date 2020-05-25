import React from "react";
import { createCtx } from "../utilities/createCtx";
import { appReducer } from "../reducers/appReducer";
import { dummyData } from "../sampleData/data";
// import { State, Action } from "../@types/app";

export interface DummyDataType {
  _id: number;
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
  currFormData: DummyDataType | null;
};

// app action type
type TOGGLE_SIDE_MANU = "TOGGLE_SIDE_MANU";
type CLOSE_WORD_DIALOG = "CLOSE_WORD_DIALOG";
type CREATE_NEW_WORD = "CREATE_NEW_WORD";
type UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
type DELETE_WORD_ITEM = "DELETE_WORD_ITEM";
type SET_NEW_WORD_DIALOG = "SET_NEW_WORD_DIALOG";
type SET_UPDATE_WORD_DIALOG = "SET_UPDATE_WORD_DIALOG";

type actionType = {
  TOGGLE_SIDE_MANU: TOGGLE_SIDE_MANU;
  CLOSE_WORD_DIALOG: CLOSE_WORD_DIALOG;
  CREATE_NEW_WORD: CREATE_NEW_WORD;
  UPDATE_CATEGORIES: UPDATE_CATEGORIES;
  DELETE_WORD_ITEM: DELETE_WORD_ITEM;
  SET_NEW_WORD_DIALOG: SET_NEW_WORD_DIALOG;
  SET_UPDATE_WORD_DIALOG: SET_UPDATE_WORD_DIALOG;
};

export const AppActionType: actionType = {
  TOGGLE_SIDE_MANU: "TOGGLE_SIDE_MANU",
  CLOSE_WORD_DIALOG: "CLOSE_WORD_DIALOG",
  CREATE_NEW_WORD: "CREATE_NEW_WORD",
  UPDATE_CATEGORIES: "UPDATE_CATEGORIES",
  DELETE_WORD_ITEM: "DELETE_WORD_ITEM",
  SET_NEW_WORD_DIALOG: "SET_NEW_WORD_DIALOG",
  SET_UPDATE_WORD_DIALOG: "SET_UPDATE_WORD_DIALOG",
};

export type AppAction =
  | { type: TOGGLE_SIDE_MANU }
  | { type: CLOSE_WORD_DIALOG }
  | { type: CREATE_NEW_WORD; payload: DummyDataType }
  | { type: UPDATE_CATEGORIES }
  | { type: DELETE_WORD_ITEM; payload: DummyDataType }
  | { type: SET_NEW_WORD_DIALOG }
  | { type: SET_UPDATE_WORD_DIALOG; payload: DummyDataType };

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

export const removeAWord = (item: DummyDataType, data: DummyDataType[]) => {
  data.splice(
    data.findIndex((e) => e._id === item._id),
    1
  );
  return data;
};

const initialState: AppState = {
  isSideMenuOpen: false,
  categories: populateCategories(dummyData),
  dummyData: dummyData,
  isWordDialogOpened: false,
  currFormData: null,
};

export const [AppContext, AppCtxProvider] = createCtx<AppState, AppAction>(
  appReducer,
  initialState
);

export function AppContextProvider(props: React.PropsWithChildren<{}>) {
  return <AppCtxProvider>{props.children}</AppCtxProvider>;
}
