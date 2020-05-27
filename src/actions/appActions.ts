import React from "react";
import { AppContext } from "../context";
import { AppActionType } from "../@types/app";
import { Word } from "../@types";

export function useAppActions() {
  const { dispatch } = React.useContext(AppContext);

  function openSideManu() {
    return dispatch({ type: AppActionType.OPEN_SIDE_MANU });
  }

  function closeSideManu() {
    return dispatch({ type: AppActionType.CLOSE_SIDE_MANU });
  }

  function closeWordDialog() {
    return dispatch({ type: AppActionType.CLOSE_WORD_DIALOG });
  }

  function createNewWord(formData: Word) {
    return dispatch({ type: AppActionType.CREATE_NEW_WORD, payload: formData });
  }

  function updateCategories() {
    return dispatch({
      type: AppActionType.UPDATE_CATEGORIES,
    });
  }

  function setNewWordDialog() {
    return dispatch({ type: AppActionType.SET_NEW_WORD_DIALOG });
  }

  function setUpdateWordDialog(formData: Word) {
    return dispatch({
      type: AppActionType.SET_UPDATE_WORD_DIALOG,
      payload: formData,
    });
  }

  function updateWordItem(item: Word) {
    return dispatch({
      type: AppActionType.UPDATE_WORD_ITEM,
      payload: item,
    });
  }

  function switchMainSectionContent(mainSectionData: Word[]) {
    return dispatch({
      type: AppActionType.SWICH_MAIN_SECTION_DATA,
      payload: mainSectionData,
    });
  }

  function setCurrentTab(currTab: string) {
    return dispatch({
      type: AppActionType.SET_CURRENT_TAB,
      payload: currTab,
    });
  }

  return {
    openSideManu,
    closeSideManu,
    closeWordDialog,
    createNewWord,
    updateCategories,
    setNewWordDialog,
    setUpdateWordDialog,
    updateWordItem,
    switchMainSectionContent,
    setCurrentTab,
  };
}
