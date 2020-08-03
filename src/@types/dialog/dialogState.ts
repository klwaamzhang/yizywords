import { Word } from "../../types";

export type DialogState = {
  isDialogOpened: boolean;
  currWordItem: Word | null;
  dialogPage: string;
};
