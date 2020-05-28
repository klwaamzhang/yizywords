import React from "react";
import { AppContext } from "../context";
import { AppActionType } from "../@types/app";
import { Word } from "../@types";

export function useAppActions() {
  const { dispatch } = React.useContext(AppContext);

  function openNewWordDialog() {
    return dispatch({ type: AppActionType.OPEN_NEW_WORD_DIALOG });
  }

  function openUpdateWordDialog(formData: Word) {
    return dispatch({
      type: AppActionType.OPEN_UPDATE_WORD_DIALOG,
      payload: formData,
    });
  }

  function closeWordDialog() {
    return dispatch({ type: AppActionType.CLOSE_WORD_DIALOG });
  }

  function createNewWord(formData: Word) {
    return dispatch({ type: AppActionType.CREATE_NEW_WORD, payload: formData });
  }

  function updateWordItem(item: Word) {
    return dispatch({
      type: AppActionType.UPDATE_WORD_ITEM,
      payload: item,
    });
  }

  function filterMainSectionList(categoryName: string) {
    return dispatch({
      type: AppActionType.FILTER_MAIN_SECTION_LIST,
      payload: categoryName,
    });
  }

  return {
    closeWordDialog,
    createNewWord,
    openNewWordDialog,
    openUpdateWordDialog,
    updateWordItem,
    filterMainSectionList,
  };
}
