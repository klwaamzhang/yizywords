import * as Types from './types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export const GetUserDocument = gql`
    query GetUser($userId: String!) {
  user(query: {user_id: $userId}) {
    _id
    user_id
    email
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<Types.GetUserQuery, Types.GetUserQueryVariables>;
export const GetAllWordsDocument = gql`
    query GetAllWords($user: UserQueryInput) {
  words(query: {user: $user}) {
    _id
    text
    notes
    categories
    status
    user {
      _id
      email
      user_id
    }
  }
}
    `;

/**
 * __useGetAllWordsQuery__
 *
 * To run a query within a React component, call `useGetAllWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWordsQuery({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useGetAllWordsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetAllWordsQuery, Types.GetAllWordsQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetAllWordsQuery, Types.GetAllWordsQueryVariables>(GetAllWordsDocument, baseOptions);
      }
export function useGetAllWordsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAllWordsQuery, Types.GetAllWordsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetAllWordsQuery, Types.GetAllWordsQueryVariables>(GetAllWordsDocument, baseOptions);
        }
export type GetAllWordsQueryHookResult = ReturnType<typeof useGetAllWordsQuery>;
export type GetAllWordsLazyQueryHookResult = ReturnType<typeof useGetAllWordsLazyQuery>;
export type GetAllWordsQueryResult = ApolloReactCommon.QueryResult<Types.GetAllWordsQuery, Types.GetAllWordsQueryVariables>;
export const AddWordDocument = gql`
    mutation AddWord($word: WordInsertInput!) {
  word: insertOneWord(data: $word) {
    _id
    text
    notes
    categories
    status
    user {
      _id
      email
      user_id
    }
  }
}
    `;
export type AddWordMutationFn = ApolloReactCommon.MutationFunction<Types.AddWordMutation, Types.AddWordMutationVariables>;

/**
 * __useAddWordMutation__
 *
 * To run a mutation, you first call `useAddWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWordMutation, { data, loading, error }] = useAddWordMutation({
 *   variables: {
 *      word: // value for 'word'
 *   },
 * });
 */
export function useAddWordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.AddWordMutation, Types.AddWordMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.AddWordMutation, Types.AddWordMutationVariables>(AddWordDocument, baseOptions);
      }
export type AddWordMutationHookResult = ReturnType<typeof useAddWordMutation>;
export type AddWordMutationResult = ApolloReactCommon.MutationResult<Types.AddWordMutation>;
export type AddWordMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.AddWordMutation, Types.AddWordMutationVariables>;
export const UpdateWordDocument = gql`
    mutation UpdateWord($wordId: ObjectId!, $updates: WordUpdateInput!) {
  word: updateOneWord(query: {_id: $wordId}, set: $updates) {
    _id
    text
    notes
    categories
    status
    user {
      _id
      email
      user_id
    }
  }
}
    `;
export type UpdateWordMutationFn = ApolloReactCommon.MutationFunction<Types.UpdateWordMutation, Types.UpdateWordMutationVariables>;

/**
 * __useUpdateWordMutation__
 *
 * To run a mutation, you first call `useUpdateWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWordMutation, { data, loading, error }] = useUpdateWordMutation({
 *   variables: {
 *      wordId: // value for 'wordId'
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateWordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateWordMutation, Types.UpdateWordMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.UpdateWordMutation, Types.UpdateWordMutationVariables>(UpdateWordDocument, baseOptions);
      }
export type UpdateWordMutationHookResult = ReturnType<typeof useUpdateWordMutation>;
export type UpdateWordMutationResult = ApolloReactCommon.MutationResult<Types.UpdateWordMutation>;
export type UpdateWordMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.UpdateWordMutation, Types.UpdateWordMutationVariables>;
export const DeleteWordDocument = gql`
    mutation DeleteWord($wordId: ObjectId!) {
  deletedWord: deleteOneWord(query: {_id: $wordId}) {
    _id
    text
    notes
    categories
    status
    user {
      _id
      email
      user_id
    }
  }
}
    `;
export type DeleteWordMutationFn = ApolloReactCommon.MutationFunction<Types.DeleteWordMutation, Types.DeleteWordMutationVariables>;

/**
 * __useDeleteWordMutation__
 *
 * To run a mutation, you first call `useDeleteWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWordMutation, { data, loading, error }] = useDeleteWordMutation({
 *   variables: {
 *      wordId: // value for 'wordId'
 *   },
 * });
 */
export function useDeleteWordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.DeleteWordMutation, Types.DeleteWordMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.DeleteWordMutation, Types.DeleteWordMutationVariables>(DeleteWordDocument, baseOptions);
      }
export type DeleteWordMutationHookResult = ReturnType<typeof useDeleteWordMutation>;
export type DeleteWordMutationResult = ApolloReactCommon.MutationResult<Types.DeleteWordMutation>;
export type DeleteWordMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.DeleteWordMutation, Types.DeleteWordMutationVariables>;