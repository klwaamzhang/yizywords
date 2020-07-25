import { AppActions } from "../@types/app";
import { useDispatch } from "react-redux";
import { Word } from "../@types";

export function useAppActions() {
  const dispatch = useDispatch();

  function createNewWord(formData: Word) {
    return dispatch({ type: AppActions.CREATE_NEW_WORD, payload: formData });
  }

  function updateWordItem(item: Word) {
    return dispatch({
      type: AppActions.UPDATE_WORD_ITEM,
      payload: item,
    });
  }

  function filterMainSectionList(categoryName: string) {
    return dispatch({
      type: AppActions.FILTER_MAIN_SECTION_LIST,
      payload: categoryName,
    });
  }

  function logIn() {
    return dispatch({
      type: AppActions.LOGIN,
    });
  }

  function updateWordData(data: Array<Word>) {
    dispatch({
      type: AppActions.UPDATE_WORD_DATA,
      payload: data,
    });
  }

  function deleteWordItemPermanently(item: Word | null) {
    dispatch({
      type: AppActions.DELETE_WORD_ITEM,
      payload: item,
    });
  }

  return {
    createNewWord,
    updateWordItem,
    filterMainSectionList,
    logIn,
    updateWordData,
    deleteWordItemPermanently,
  };
}
