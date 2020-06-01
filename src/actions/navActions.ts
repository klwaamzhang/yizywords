import React from "react";
import { NavActions } from "../@types/nav";
import { Word } from "../@types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";

export function useNavActions() {
  const dispatch = useDispatch();
  const isSideMenuOpen = useSelector(
    (state: RootState) => state.nav.isSideMenuOpen
  );

  function openSideMenu() {
    return dispatch({ type: NavActions.OPEN_SIDE_MENU });
  }

  function closeSideMenu() {
    if (isSideMenuOpen) {
      return dispatch({ type: NavActions.CLOSE_SIDE_MENU });
    }
  }

  function updateCategories(words: Word[]) {
    return dispatch({
      type: NavActions.UPDATE_CATEGORIES,
      payload: words,
    });
  }

  return {
    openSideMenu,
    closeSideMenu,
    updateCategories,
  };
}
