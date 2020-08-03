import { AppActions } from "../@types/app";
import { useDispatch } from "react-redux";
import { Word, User } from "../types";

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

  function logOut() {
    return dispatch({
      type: AppActions.LOGOUT,
    });
  }

  function storeWords(words: Word[]) {
    return dispatch({
      type: AppActions.STORE_WORDS,
      payload: words,
    });
  }

  function storeUser(user: User) {
    return dispatch({
      type: AppActions.STORE_USER,
      payload: user,
    });
  }

  return {
    createNewWord,
    updateWordItem,
    filterMainSectionList,
    logIn,
    updateWordData,
    deleteWordItemPermanently,
    logOut,
    storeWords,
    storeUser,
  };
}
