import React from "react";
import { NavActionType } from "../@types/nav";
import { Word } from "../@types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App";

export function useNavActions() {
  const dispatch = useDispatch();
  const isSideMenuOpen = useSelector(
    (state: RootState) => state.nav.isSideMenuOpen
  );

  function openSideMenu() {
    return dispatch({ type: NavActionType.OPEN_SIDE_MENU });
  }

  function closeSideMenu() {
    if (isSideMenuOpen) {
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
