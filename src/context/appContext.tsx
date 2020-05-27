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
  status: string;
}

// app state type
export type AppState = {
  isSideMenuOpen: boolean;
  categories: string[];
  dummyData: Array<DummyDataType>;
  isWordDialogOpened: boolean;
  currFormData: DummyDataType | null;
  mainSectionData: Array<DummyDataType>;
  currTab: string;
  isLoggedin: boolean;
};

// app action type
type OPEN_SIDE_MANU = "OPEN_SIDE_MANU";
type CLOSE_SIDE_MANU = "CLOSE_SIDE_MANU";
type CLOSE_WORD_DIALOG = "CLOSE_WORD_DIALOG";
type CREATE_NEW_WORD = "CREATE_NEW_WORD";
type UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
type SET_NEW_WORD_DIALOG = "SET_NEW_WORD_DIALOG";
type SET_UPDATE_WORD_DIALOG = "SET_UPDATE_WORD_DIALOG";
type UPDATE_WORD_ITEM = "UPDATE_WORD_ITEM";
type SWICH_MAIN_SECTION_DATA = "SWICH_MAIN_SECTION_DATA";
type SET_CURRENT_TAB = "SET_CURRENT_TAB";

type actionType = {
  OPEN_SIDE_MANU: OPEN_SIDE_MANU;
  CLOSE_SIDE_MANU: CLOSE_SIDE_MANU;
  CLOSE_WORD_DIALOG: CLOSE_WORD_DIALOG;
  CREATE_NEW_WORD: CREATE_NEW_WORD;
  UPDATE_CATEGORIES: UPDATE_CATEGORIES;
  SET_NEW_WORD_DIALOG: SET_NEW_WORD_DIALOG;
  SET_UPDATE_WORD_DIALOG: SET_UPDATE_WORD_DIALOG;
  UPDATE_WORD_ITEM: UPDATE_WORD_ITEM;
  SWICH_MAIN_SECTION_DATA: SWICH_MAIN_SECTION_DATA;
  SET_CURRENT_TAB: SET_CURRENT_TAB;
};

export const AppActionType: actionType = {
  OPEN_SIDE_MANU: "OPEN_SIDE_MANU",
  CLOSE_SIDE_MANU: "CLOSE_SIDE_MANU",
  CLOSE_WORD_DIALOG: "CLOSE_WORD_DIALOG",
  CREATE_NEW_WORD: "CREATE_NEW_WORD",
  UPDATE_CATEGORIES: "UPDATE_CATEGORIES",
  SET_NEW_WORD_DIALOG: "SET_NEW_WORD_DIALOG",
  SET_UPDATE_WORD_DIALOG: "SET_UPDATE_WORD_DIALOG",
  UPDATE_WORD_ITEM: "UPDATE_WORD_ITEM",
  SWICH_MAIN_SECTION_DATA: "SWICH_MAIN_SECTION_DATA",
  SET_CURRENT_TAB: "SET_CURRENT_TAB",
};

export type AppAction =
  | { type: OPEN_SIDE_MANU }
  | { type: CLOSE_SIDE_MANU }
  | { type: CLOSE_WORD_DIALOG }
  | { type: CREATE_NEW_WORD; payload: DummyDataType }
  | { type: UPDATE_CATEGORIES }
  | { type: SET_NEW_WORD_DIALOG }
  | { type: SET_UPDATE_WORD_DIALOG; payload: DummyDataType }
  | { type: UPDATE_WORD_ITEM; payload: DummyDataType }
  | { type: SWICH_MAIN_SECTION_DATA; payload: DummyDataType[] }
  | { type: SET_CURRENT_TAB; payload: string };

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

export const filterMainSectionData = (
  category: string,
  data: DummyDataType[]
) => {
  return data.filter(
    (item) =>
      item.categories.find((e) => e === category) && item.status !== "deleted"
  );
};

const initialState: AppState = {
  isSideMenuOpen: false,
  categories: populateCategories(dummyData),
  dummyData: dummyData,
  isWordDialogOpened: false,
  currFormData: null,
  mainSectionData: filterMainSectionData("Inbox", dummyData),
  currTab: "Inbox",
  isLoggedin: false,
};

export const [AppContext, AppCtxProvider] = createCtx<AppState, AppAction>(
  appReducer,
  initialState
);

export function AppContextProvider(props: React.PropsWithChildren<{}>) {
  return <AppCtxProvider>{props.children}</AppCtxProvider>;
}
