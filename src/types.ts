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
  set: WordUpdateInput;
  query?: Maybe<WordQueryInput>;
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
  data: UserInsertInput;
  query?: Maybe<UserQueryInput>;
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
  query?: Maybe<WordQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<WordSortByInput>;
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
  user_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_id_lte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_ne?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  user_id_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<UserQueryInput>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  user_id_gte?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<UserQueryInput>>;
  email_lte?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  user_id_lt?: Maybe<Scalars['String']>;
  user_id_gt?: Maybe<Scalars['String']>;
  user_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  user_id?: Maybe<Scalars['String']>;
  email_lt?: Maybe<Scalars['String']>;
  user_id_ne?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  email_gt?: Maybe<Scalars['String']>;
};

export enum UserSortByInput {
  IdDesc = '_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = '_ID_ASC'
}

export type UserUpdateInput = {
  user_id?: Maybe<Scalars['String']>;
  user_id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
};

export type Word = {
  __typename?: 'Word';
  _id: Scalars['ObjectId'];
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  text: Scalars['String'];
  user: User;
};

export type WordInsertInput = {
  user: WordUserRelationInput;
  text: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  status: Scalars['String'];
  _id?: Maybe<Scalars['ObjectId']>;
};

export type WordQueryInput = {
  text_lte?: Maybe<Scalars['String']>;
  text_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  text_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  notes_gte?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  text_exists?: Maybe<Scalars['Boolean']>;
  notes_lte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  notes_gt?: Maybe<Scalars['String']>;
  status_gte?: Maybe<Scalars['String']>;
  status_exists?: Maybe<Scalars['Boolean']>;
  notes_lt?: Maybe<Scalars['String']>;
  categories_exists?: Maybe<Scalars['Boolean']>;
  status_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  notes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  text_gte?: Maybe<Scalars['String']>;
  notes_ne?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<WordQueryInput>>;
  user_exists?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  categories_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<UserQueryInput>;
  text_ne?: Maybe<Scalars['String']>;
  notes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  text_gt?: Maybe<Scalars['String']>;
  text_lt?: Maybe<Scalars['String']>;
  status_lt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<WordQueryInput>>;
  _id?: Maybe<Scalars['ObjectId']>;
  text?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  notes_exists?: Maybe<Scalars['Boolean']>;
  categories_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum WordSortByInput {
  StatusAsc = 'STATUS_ASC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  UserAsc = 'USER_ASC',
  UserDesc = 'USER_DESC',
  TextAsc = 'TEXT_ASC',
  TextDesc = 'TEXT_DESC',
  NotesDesc = 'NOTES_DESC',
  StatusDesc = 'STATUS_DESC',
  NotesAsc = 'NOTES_ASC'
}

export type WordUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  notes_unset?: Maybe<Scalars['Boolean']>;
  status_unset?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<WordUserRelationInput>;
  user_unset?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  text_unset?: Maybe<Scalars['Boolean']>;
  categories_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type WordUserRelationInput = {
  create?: Maybe<UserInsertInput>;
  link?: Maybe<Scalars['String']>;
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

export type GetAllWordsQueryVariables = Exact<{ [key: string]: never; }>;


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
