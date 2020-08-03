import * as React from "react";
import { Word, User } from "../types";
import { GetAllWordsQuery } from "../types";
import {
  useGetAllWordsQuery,
  //   useAddWordMutation,
  //   useUpdateWordMutation,
  //   useDeleteWordMutation,
} from "../graphql-operations";
import { useAppActions } from "../actions";
import { ApolloError } from "@apollo/react-hooks";

export enum WordStatus {
  Active = "active",
  Deleted = "deleted",
}

interface UpdateWord {
  text?: string;
  notes?: string;
  categories?: string[];
  status?: string;
  user?: User;
}

export interface WordActions {
  addWord: (word: Word) => Promise<void>;
  updateWord: (wordId: string, updatedWord: UpdateWord) => Promise<void>;
  deleteWord: (word: Word) => Promise<void>;
}

export function useWords(): {
  words: Word[];
  loading: boolean;
  error: ApolloError | undefined;
  //   actions: WordActions;
} {
  const { storeWords } = useAppActions();
  const [words, setWords] = React.useState<Word[]>([]);

  const { loading, error } = useGetAllWordsQuery({
    variables: {
      user: {
        user_id: "5f25d09ac5c11965cadf30a1",
      },
    },
    onCompleted: (data: GetAllWordsQuery) => {
      if (data?.words) {
        setWords(data.words as Word[]);
        // const wwword = data.words as Word[];
        // console.log(wwword);
        // storeWords([]);
      }
    },
  });
  //   const [addWordMutation] = useAddWordMutation();
  //   const [updateWordMutation] = useUpdateWordMutation();
  //   const [deleteWordMutation] = useDeleteWordMutation();

  return {
    words,
    loading,
    error,
  };
}
