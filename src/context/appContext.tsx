import React from "react";
import { createCtx } from "../utilities/createCtx";
import { appReducer } from "../reducers/appReducer";
import { dummyData } from "../sampleData/data";
import { Word } from "../@types";
import { AppState, AppAction } from "../@types/app";

export const populateCategories = (data: Word[]) => {
  return data
    .flatMap((item) => item.categories)
    .reduce((acc, cur) => {
      if (cur !== "Inbox" && acc.indexOf(cur) === -1) {
        acc.push(cur);
      }
      return acc;
    }, new Array<string>());
};

export const filterMainSectionData = (filterName: string, data: Word[]) => {
  if (filterName === "Recycle Bin") {
    return data.filter((item) => item.status === "deleted");
  }
  return data.filter(
    (item) =>
      item.status !== "deleted" && item.categories.find((e) => e === filterName)
  );
};

const initialState: AppState = {
  isSideMenuOpen: false,
  categories: populateCategories(dummyData),
  dummyData: dummyData,
  isWordDialogOpened: false,
  currFormData: null,
  mainSectionData: filterMainSectionData("Inbox", dummyData),
  // currTab: "Inbox",
  // isLoggedin: false,
};

export const [AppContext, AppCtxProvider] = createCtx<AppState, AppAction>(
  appReducer,
  initialState
);

export function AppContextProvider(props: React.PropsWithChildren<{}>) {
  return <AppCtxProvider>{props.children}</AppCtxProvider>;
}
