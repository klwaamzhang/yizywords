import { Word, User, GetUserQuery } from "../types";
import { GetAllWordsQuery } from "../types";
import {
  useGetAllWordsQuery,
  useAddWordMutation,
  useGetUserLazyQuery,
  useUpdateWordMutation,
  //   useDeleteWordMutation,
} from "../graphql-operations";
import { useAppActions } from "../actions";
// import { RootState } from "../reducers";
// import { useSelector } from "react-redux";
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
  //   const [deleteWordMutation] = useDeleteWordMutation();

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
      //update view
    } catch (err) {
      throw new Error(`Unable to add word: ${err}`);
    }
  };

  const updateWord = async (wordId: string, updatedWord: UpdateWord) => {
    try {
      const response = await updateWordMutation({
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
      });
      //update view
      updateWordItem(response.data?.word as Word);
    } catch (err) {
      throw new Error(`Unable to update word: ${err}`);
    }
  };

  return {
    loading,
    actions: {
      addWord,
      updateWord,
    },
  };
}
