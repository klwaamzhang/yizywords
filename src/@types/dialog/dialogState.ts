import { Word } from "../word";

export type DialogState = {
  isWordDialogOpened: boolean;
  currFormData: Word | null;
};
