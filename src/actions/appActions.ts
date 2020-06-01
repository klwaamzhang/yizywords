import React from "react";
import { AppActionType } from "../@types/app";
import { useDispatch } from "react-redux";
import { Word } from "../@types";

export function useAppActions() {
  const dispatch = useDispatch();

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
