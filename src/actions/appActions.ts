import React from "react";
import { AppContext, AppActionType, DummyDataType } from "../context";

export function useAppActions() {
  const { dispatch } = React.useContext(AppContext);

  function toggleSideManu() {
    return dispatch({ type: AppActionType.TOGGLE_SIDE_MANU });
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

  function deleteWordItem(itemIndex: number) {
    return dispatch({
      type: AppActionType.DELETE_WORD_ITEM,
      payload: itemIndex,
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
  return {
    toggleSideManu,
    closeWordDialog,
    createNewWord,
    updateCategories,
    deleteWordItem,
    setNewWordDialog,
    setUpdateWordDialog,
  };
}
