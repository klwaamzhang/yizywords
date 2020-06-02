import { Word } from "../word";

export type AppState = {
  wordData: Array<Word>;
  mainSectionData: Array<Word>;
  urlLocationPathname: string;
};
