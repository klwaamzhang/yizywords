import React from "react";
import { createCtx } from "../utilities/createCtx";
import { appReducer } from "../reducers";
import { dummyData } from "../sampleData/data";
import { AppState, AppAction } from "../@types/app";
import { filterMainSectionData } from "../utilities/helper";

const initialState: AppState = {
  dummyData: dummyData,
  mainSectionData: filterMainSectionData("Inbox", dummyData),
};

export const [AppContext, AppCtxProvider] = createCtx<AppState, AppAction>(
  appReducer,
  initialState
);

export function AppContextProvider(props: React.PropsWithChildren<{}>) {
  return <AppCtxProvider>{props.children}</AppCtxProvider>;
}
