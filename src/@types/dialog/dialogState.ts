import { Word } from "../word";

export type DialogState = {
  isDialogOpened: boolean;
  currWordItem: Word | null;
  dialogPage: string;
};
