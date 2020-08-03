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
import { RootState } from "../reducers";
import { useSelector } from "react-redux";

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
  loading: boolean;
  //   actions: WordActions;
} {
  const { storeWords } = useAppActions();
  const { userId } = useSelector((state: RootState) => state.app);

  const { loading } = useGetAllWordsQuery({
    variables: {
      user: {
        user_id: userId,
      },
    },
    onCompleted: (data: GetAllWordsQuery) => {
      if (data?.words) {
        storeWords(data.words as Word[]);
      }
    },
  });
  //   const [addWordMutation] = useAddWordMutation();
  //   const [updateWordMutation] = useUpdateWordMutation();
  //   const [deleteWordMutation] = useDeleteWordMutation();

  return {
    loading,
  };
}
