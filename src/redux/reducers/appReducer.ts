import { AppState, AppAction, AppActions } from "../@types/app";

const initialState: AppState = {
  words: [],
  user: undefined,
};

export function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActions.CREATE_NEW_WORD:
      return { ...state, words: [...state.words, action.payload] };
    case AppActions.UPDATE_WORD_ITEM:
      const newDataUpdate = state.words.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return { ...state, words: newDataUpdate };
    case AppActions.DELETE_WORD_ITEM:
      const deletedDataArrUpdate = state.words.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, words: deletedDataArrUpdate };
    case AppActions.STORE_WORDS:
      return { ...state, words: action.payload };
    case AppActions.STORE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
