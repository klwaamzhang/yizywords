import React from "react";
import { AppContext, AppActionType } from "../context";

export function useAppActions() {
  const { dispatch } = React.useContext(AppContext);

  function toggleSideManu() {
    return dispatch({ type: AppActionType.TOGGLE_SIDE_MANU });
  }

  return { toggleSideManu };
}
