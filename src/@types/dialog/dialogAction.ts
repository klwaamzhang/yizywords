import { Word } from "../../types";

type CLOSE_DIALOG = "CLOSE_DIALOG";
type OPEN_NEW_WORD_PAGE = "OPEN_NEW_WORD_PAGE";
type OPEN_UPDATE_WORD_PAGE = "OPEN_UPDATE_WORD_PAGE";
type OPEN_CONFIRMATION_PAGE = "OPEN_CONFIRMATION_PAGE";

type actionType = {
  CLOSE_DIALOG: CLOSE_DIALOG;
  OPEN_NEW_WORD_PAGE: OPEN_NEW_WORD_PAGE;
  OPEN_UPDATE_WORD_PAGE: OPEN_UPDATE_WORD_PAGE;
  OPEN_CONFIRMATION_PAGE: OPEN_CONFIRMATION_PAGE;
};

export const DialogActions: actionType = {
  CLOSE_DIALOG: "CLOSE_DIALOG",
  OPEN_NEW_WORD_PAGE: "OPEN_NEW_WORD_PAGE",
  OPEN_UPDATE_WORD_PAGE: "OPEN_UPDATE_WORD_PAGE",
  OPEN_CONFIRMATION_PAGE: "OPEN_CONFIRMATION_PAGE",
};

export type DialogAction =
  | { type: OPEN_NEW_WORD_PAGE }
  | { type: OPEN_UPDATE_WORD_PAGE; payload: Word }
  | { type: CLOSE_DIALOG }
  | { type: OPEN_CONFIRMATION_PAGE; payload: Word };
