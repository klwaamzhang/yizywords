import { Word, User, GetUserQuery } from "../types";
import { GetAllWordsQuery } from "../types";
import {
  useGetAllWordsQuery,
  useAddWordMutation,
  useGetUserLazyQuery,
  useUpdateWordMutation,
  useDeleteWordMutation,
} from "../graphql-operations";
import { useAppActions } from "../actions";
import { useRealmApp } from "../realm/RealmApp";

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
  actions: WordActions;
} {
  const {
    storeWords,
    storeUser,
    createNewWord,
    updateWordItem,
    deleteWordItemPermanently,
  } = useAppActions();
  const { user } = useRealmApp();

  const [getUserQuery] = useGetUserLazyQuery({
    onCompleted: ({ user }: GetUserQuery) => {
      if (user) storeUser(user);
    },
  });

  const { loading } = useGetAllWordsQuery({
    variables: {
      user: {
        user_id: user?.id,
      },
    },
    onCompleted: (data: GetAllWordsQuery) => {
      if (data?.words) {
        storeWords(data.words as Word[]);
      }
      if (user?.id) getUserQuery({ variables: { userId: user?.id } });
    },
  });

  const [addWordMutation] = useAddWordMutation();
  const [updateWordMutation] = useUpdateWordMutation();
  const [deleteWordMutation] = useDeleteWordMutation();

  const addWord = async (word: Word) => {
    try {
      await addWordMutation({
        variables: {
          word: {
            text: word.text,
            notes: word.notes,
            categories: word.categories ?? undefined,
            status: word.status,
            user: { link: word.user.user_id },
          },
        },
      }).then((response) => createNewWord(response.data?.word as Word));
    } catch (err) {
      throw new Error(`Unable to add word: ${err}`);
    }
  };

  const updateWord = async (wordId: string, updatedWord: UpdateWord) => {
    try {
      await updateWordMutation({
        variables: {
          wordId: wordId,
          updates: {
            text: updatedWord?.text ?? undefined,
            notes: updatedWord?.notes ?? undefined,
            categories: updatedWord?.categories ?? undefined,
            status: updatedWord?.status ?? undefined,
            user: updatedWord.user
              ? { link: updatedWord.user.user_id }
              : undefined,
          },
        },
      }).then((response) => updateWordItem(response.data?.word as Word));
    } catch (err) {
      throw new Error(`Unable to update word: ${err}`);
    }
  };

  const deleteWord = async (word: Word) => {
    try {
      await deleteWordMutation({
        variables: {
          wordId: word._id,
        },
      }).then((response) =>
        deleteWordItemPermanently(response.data?.deletedWord as Word)
      );
    } catch (err) {
      throw new Error(`Unable to delete task: ${err}`);
    }
  };

  return {
    loading,
    actions: {
      addWord,
      updateWord,
      deleteWord,
    },
  };
}
