import React from "react";
import { NavContext } from "../context";
import { NavActionType } from "../@types/nav";

export function useNavActions() {
  const { dispatch } = React.useContext(NavContext);

  function openSideManu() {
    return dispatch({ type: NavActionType.OPEN_SIDE_MANU });
  }

  function closeSideManu() {
    return dispatch({ type: NavActionType.CLOSE_SIDE_MANU });
  }

  return {
    openSideManu,
    closeSideManu,
  };
}
