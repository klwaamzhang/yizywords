import * as React from "react";
import * as RealmWeb from "realm-web";
import { useRealmApp } from "./RealmApp";

// Apollo
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";

import { ApolloProvider } from "@apollo/react-hooks";

const RealmApolloProvider: React.FC = ({ children }) => {
  const { id, user } = useRealmApp();
  const [client, setClient] = React.useState(
    createApolloClient(id, user as RealmWeb.User)
  );
  React.useEffect(() => {
    setClient(createApolloClient(id, user as RealmWeb.User));
  }, [id, user]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default RealmApolloProvider;

function createApolloClient(
  realmAppId: string,
  user: RealmWeb.User
): ApolloClient<NormalizedCacheObject> {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;
  const httpLink = new HttpLink({ uri: graphql_url });
  const authorizationHeaderLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${user.accessToken}`,
    },
  }));

  return new ApolloClient({
    link: authorizationHeaderLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
