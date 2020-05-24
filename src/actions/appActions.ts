import React from "react";
import { AppContext, AppActionType, DummyDataType } from "../context";

export function useAppActions() {
  const { dispatch } = React.useContext(AppContext);

  function toggleSideManu() {
    return dispatch({ type: AppActionType.TOGGLE_SIDE_MANU });
  }

  function toggleWordDialog() {
    return dispatch({ type: AppActionType.TOGGLE_NEW_WORD_DIALOG });
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

  return {
    toggleSideManu,
    toggleWordDialog,
    createNewWord,
    updateCategories,
    deleteWordItem,
  };
}
