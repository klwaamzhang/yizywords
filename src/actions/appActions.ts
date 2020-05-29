import React from "react";
import { AppContext } from "../context";
import { AppActionType } from "../@types/app";
import { Word } from "../@types";

export function useAppActions() {
  const { dispatch } = React.useContext(AppContext);

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
    createNewWord,
    updateWordItem,
    filterMainSectionList,
  };
}
