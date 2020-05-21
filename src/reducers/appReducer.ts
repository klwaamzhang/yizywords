import { AppState, AppAction, AppActionType } from "../context";

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.TOGGLE_SIDE_MANU:
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen };
    default:
      throw new Error("error: AppContext reducer error!");
  }
}
