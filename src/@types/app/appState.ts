import { Word } from "../word";

export type AppState = {
  isSideMenuOpen: boolean;
  categories: string[];
  dummyData: Array<Word>;
  isWordDialogOpened: boolean;
  currFormData: Word | null;
  mainSectionData: Array<Word>;
  currTab: string;
};
