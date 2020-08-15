export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteManyWords?: Maybe<DeleteManyPayload>;
  deleteOneUser?: Maybe<User>;
  deleteOneWord?: Maybe<Word>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertManyWords?: Maybe<InsertManyPayload>;
  insertOneUser?: Maybe<User>;
  insertOneWord?: Maybe<Word>;
  replaceOneUser?: Maybe<User>;
  replaceOneWord?: Maybe<Word>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateManyWords?: Maybe<UpdateManyPayload>;
  updateOneUser?: Maybe<User>;
  updateOneWord?: Maybe<Word>;
  upsertOneUser?: Maybe<User>;
  upsertOneWord?: Maybe<Word>;
};


export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
};


export type MutationDeleteManyWordsArgs = {
  query?: Maybe<WordQueryInput>;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationDeleteOneWordArgs = {
  query: WordQueryInput;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertManyWordsArgs = {
  data: Array<WordInsertInput>;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationInsertOneWordArgs = {
  data: WordInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationReplaceOneWordArgs = {
  query?: Maybe<WordQueryInput>;
  data: WordInsertInput;
};


export type MutationUpdateManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateManyWordsArgs = {
  query?: Maybe<WordQueryInput>;
  set: WordUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneWordArgs = {
  query?: Maybe<WordQueryInput>;
  set: WordUpdateInput;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationUpsertOneWordArgs = {
  query?: Maybe<WordQueryInput>;
  data: WordInsertInput;
};


export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  word?: Maybe<Word>;
  words: Array<Maybe<Word>>;
};


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};


export type QueryWordArgs = {
  query?: Maybe<WordQueryInput>;
};


export type QueryWordsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<WordSortByInput>;
  query?: Maybe<WordQueryInput>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId'];
  email: Scalars['String'];
  user_id: Scalars['String'];
};

export type UserInsertInput = {
  email: Scalars['String'];
  _id?: Maybe<Scalars['ObjectId']>;
  user_id: Scalars['String'];
};

export type UserQueryInput = {
  user_id_lte?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  email_exists?: Maybe<Scalars['Boolean']>;
  user_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<UserQueryInput>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<UserQueryInput>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  email_lt?: Maybe<Scalars['String']>;
  user_id_ne?: Maybe<Scalars['String']>;
  user_id_gte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  user_id_lt?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  user_id_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  user_id_gt?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  email_lte?: Maybe<Scalars['String']>;
  user_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_gte?: Maybe<Scalars['String']>;
};

export enum UserSortByInput {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type UserUpdateInput = {
  email_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['String']>;
  user_id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
};

export type Word = {
  __typename?: 'Word';
  _id: Scalars['ObjectId'];
  categories: Array<Maybe<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  text: Scalars['String'];
  user: User;
};

export type WordInsertInput = {
  text: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  categories: Array<Maybe<Scalars['String']>>;
  status: Scalars['String'];
  _id?: Maybe<Scalars['ObjectId']>;
  user: WordUserRelationInput;
};

export type WordQueryInput = {
  _id_exists?: Maybe<Scalars['Boolean']>;
  text_gte?: Maybe<Scalars['String']>;
  status_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes_gte?: Maybe<Scalars['String']>;
  categories_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  text_lte?: Maybe<Scalars['String']>;
  status_exists?: Maybe<Scalars['Boolean']>;
  status_gte?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  OR?: Maybe<Array<WordQueryInput>>;
  notes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  notes_gt?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  text_lt?: Maybe<Scalars['String']>;
  notes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<WordQueryInput>>;
  text_gt?: Maybe<Scalars['String']>;
  text_exists?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  notes_lte?: Maybe<Scalars['String']>;
  notes_exists?: Maybe<Scalars['Boolean']>;
  status_lte?: Maybe<Scalars['String']>;
  user_exists?: Maybe<Scalars['Boolean']>;
  text_ne?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  user?: Maybe<UserQueryInput>;
  notes?: Maybe<Scalars['String']>;
  status_lt?: Maybe<Scalars['String']>;
  text_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes_ne?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  status_ne?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum WordSortByInput {
  UserAsc = 'USER_ASC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  TextAsc = 'TEXT_ASC',
  TextDesc = 'TEXT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  UserDesc = 'USER_DESC'
}

export type WordUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  user?: Maybe<WordUserRelationInput>;
  categories_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  text_unset?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  user_unset?: Maybe<Scalars['Boolean']>;
  status_unset?: Maybe<Scalars['Boolean']>;
  notes_unset?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
};

export type WordUserRelationInput = {
  link?: Maybe<Scalars['String']>;
  create?: Maybe<UserInsertInput>;
};

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'user_id' | 'email'>
  )> }
);

export type GetAllWordsQueryVariables = Exact<{
  user?: Maybe<UserQueryInput>;
}>;


export type GetAllWordsQuery = (
  { __typename?: 'Query' }
  & { words: Array<Maybe<(
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'text' | 'notes' | 'categories' | 'status'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'email' | 'user_id'>
    ) }
  )>> }
);

export type AddWordMutationVariables = Exact<{
  word: WordInsertInput;
}>;


export type AddWordMutation = (
  { __typename?: 'Mutation' }
  & { word?: Maybe<(
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'text' | 'notes' | 'categories' | 'status'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'email' | 'user_id'>
    ) }
  )> }
);

export type UpdateWordMutationVariables = Exact<{
  wordId: Scalars['ObjectId'];
  updates: WordUpdateInput;
}>;


export type UpdateWordMutation = (
  { __typename?: 'Mutation' }
  & { word?: Maybe<(
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'text' | 'notes' | 'categories' | 'status'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'email' | 'user_id'>
    ) }
  )> }
);

export type DeleteWordMutationVariables = Exact<{
  wordId: Scalars['ObjectId'];
}>;


export type DeleteWordMutation = (
  { __typename?: 'Mutation' }
  & { deletedWord?: Maybe<(
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'text' | 'notes' | 'categories' | 'status'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'email' | 'user_id'>
    ) }
  )> }
);
