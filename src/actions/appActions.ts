import React from "react";
import { AppContext, AppActionType, DummyDataType } from "../context";

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

  function createNewWord(formData: DummyDataType) {
    return dispatch({ type: AppActionType.CREATE_NEW_WORD, payload: formData });
  }

  function updateCategories() {
    return dispatch({
      type: AppActionType.UPDATE_CATEGORIES,
    });
  }

  function deleteWordItem(item: DummyDataType) {
    return dispatch({
      type: AppActionType.DELETE_WORD_ITEM,
      payload: item,
    });
  }

  function setNewWordDialog() {
    return dispatch({ type: AppActionType.SET_NEW_WORD_DIALOG });
  }

  function setUpdateWordDialog(formData: DummyDataType) {
    return dispatch({
      type: AppActionType.SET_UPDATE_WORD_DIALOG,
      payload: formData,
    });
  }

  function updateWordItem(item: DummyDataType) {
    return dispatch({
      type: AppActionType.UPDATE_WORD_ITEM,
      payload: item,
    });
  }

  function switchMainSectionMenu(mainSectionData: DummyDataType[]) {
    return dispatch({
      type: AppActionType.SWICH_MAIN_SECTION_DATA,
      payload: mainSectionData,
    });
  }

  function setCurrentCategory(currCategory: string) {
    return dispatch({
      type: AppActionType.SET_CURRENT_CATEGORY,
      payload: currCategory,
    });
  }

  return {
    openSideManu,
    closeSideManu,
    closeWordDialog,
    createNewWord,
    updateCategories,
    deleteWordItem,
    setNewWordDialog,
    setUpdateWordDialog,
    updateWordItem,
    switchMainSectionMenu,
    setCurrentCategory,
  };
}
