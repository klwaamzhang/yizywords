import React from "react";
import { NavContext } from "../context";
import { NavActionType } from "../@types/nav";
import { Word } from "../@types";

export function useNavActions() {
  const { state, dispatch } = React.useContext(NavContext);

  function openSideMenu() {
    return dispatch({ type: NavActionType.OPEN_SIDE_MENU });
  }

  function closeSideMenu() {
    if (state.isSideMenuOpen) {
      return dispatch({ type: NavActionType.CLOSE_SIDE_MENU });
    }
  }

  function updateCategories(words: Word[]) {
    return dispatch({
      type: NavActionType.UPDATE_CATEGORIES,
      payload: words,
    });
  }

  return {
    openSideMenu,
    closeSideMenu,
    updateCategories,
  };
}
