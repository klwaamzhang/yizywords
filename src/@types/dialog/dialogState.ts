import { Word } from "../word";

export type DialogState = {
  isDialogOpened: boolean;
  currFormData: Word | null;
  dialogPage: string;
};
