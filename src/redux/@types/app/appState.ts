import { Word, User } from "../../../realm/types";

export type AppState = {
  words: Word[];
  user: User | undefined;
};
