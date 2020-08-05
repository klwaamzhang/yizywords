import { Word } from "../../../realm/types";

export type DialogState = {
  isDialogOpened: boolean;
  currWordItem: Word | null;
  dialogPage: string;
};
