import { Word, User } from "../../types";

export type AppState = {
  words: Word[];
  user: User | undefined;
};
