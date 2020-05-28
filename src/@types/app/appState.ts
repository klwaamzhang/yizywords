import { Word } from "../word";

export type AppState = {
  dummyData: Array<Word>;
  isWordDialogOpened: boolean;
  currFormData: Word | null;
  mainSectionData: Array<Word>;
};
