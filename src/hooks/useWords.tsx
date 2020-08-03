import { Word, User, GetUserQuery } from "../types";
import { GetAllWordsQuery } from "../types";
import {
  useGetAllWordsQuery,
  useAddWordMutation,
  useGetUserLazyQuery,
  //   useUpdateWordMutation,
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
  //   updateWord: (wordId: string, updatedWord: UpdateWord) => Promise<void>;
  //   deleteWord: (word: Word) => Promise<void>;
}

export function useWords(): {
  loading: boolean;
  addWord: (word: Word) => Promise<void>;
} {
  const { storeWords, storeUser } = useAppActions();
  const { user } = useRealmApp();

  const [getUserQuery] = useGetUserLazyQuery({
    onCompleted: ({ user }: GetUserQuery) => {
      console.log("user", user);
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
  //   const [updateWordMutation] = useUpdateWordMutation();
  //   const [deleteWordMutation] = useDeleteWordMutation();

  const addWord = async (word: Word) => {
    try {
      const response = await addWordMutation({
        variables: {
          word: {
            text: word.text,
            notes: word.notes,
            categories: word.categories ?? undefined,
            status: word.status,
            user: { link: word.user.user_id },
          },
        },
      });
      console.log(response.data?.word);
    } catch (err) {
      throw new Error(`Unable to add word: ${err}`);
    }
  };

  return {
    loading,
    addWord,
  };
}
