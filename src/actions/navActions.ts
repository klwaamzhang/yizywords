import React from "react";
import { NavContext } from "../context";
import { NavActionType } from "../@types/nav";
import { Word } from "../@types";

export function useNavActions() {
  const { dispatch } = React.useContext(NavContext);

  function openSideManu() {
    return dispatch({ type: NavActionType.OPEN_SIDE_MANU });
  }

  function closeSideManu() {
    return dispatch({ type: NavActionType.CLOSE_SIDE_MANU });
  }

  function updateCategories(words: Word[]) {
    return dispatch({
      type: NavActionType.UPDATE_CATEGORIES,
      payload: words,
    });
  }

  return {
    openSideManu,
    closeSideManu,
    updateCategories,
  };
}
