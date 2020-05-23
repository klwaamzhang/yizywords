import React from "react";
import { AppContext, AppActionType, DummyDataType } from "../context";

export function useAppActions() {
  const { dispatch } = React.useContext(AppContext);

  function toggleSideManu() {
    return dispatch({ type: AppActionType.TOGGLE_SIDE_MANU });
  }

  function toggleNewWordDialog() {
    return dispatch({ type: AppActionType.TOGGLE_NEW_WORD_DIALOG });
  }

  function createNewWord(formData: DummyDataType) {
    return dispatch({ type: AppActionType.CREATE_NEW_WORD, payload: formData });
  }

  function updateCategories(dummyData: DummyDataType[]) {
    return dispatch({
      type: AppActionType.UPDATE_CATEGORIES,
      payload: dummyData,
    });
  }

  return {
    toggleSideManu,
    toggleNewWordDialog,
    createNewWord,
    updateCategories,
  };
}
