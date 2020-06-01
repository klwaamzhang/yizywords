import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { navReducer } from "./navReducer";
import { dialogReducer } from "./dialogReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  nav: navReducer,
  dialog: dialogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
