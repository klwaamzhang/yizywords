import React from "react";
import { createCtx } from "../utilities/createCtx";
import { navReducer } from "../reducers";
import { dummyData } from "../sampleData/data";
import { NavState, NavAction } from "../@types/nav";

const initialState: NavState = {
  isSideMenuOpen: false,
  // categories: populateCategories(dummyData),
};

export const [NavContext, NavCtxProvider] = createCtx<NavState, NavAction>(
  navReducer,
  initialState
);

export function NavContextProvider(props: React.PropsWithChildren<{}>) {
  return <NavCtxProvider>{props.children}</NavCtxProvider>;
}
