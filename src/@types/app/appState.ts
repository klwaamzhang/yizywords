import { Word } from "../../types";

export type AppState = {
  words: Word[];
  filteredWords: Word[];
  urlLocationPathname: string;
  loggedIn: boolean;
};
