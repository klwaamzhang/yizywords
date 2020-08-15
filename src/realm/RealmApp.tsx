import * as React from "react";
import * as RealmWeb from "realm-web";

const REALM_APP_ID = "yizy_words-eqxuy";
const app = new RealmWeb.App({ id: REALM_APP_ID });

const RealmAppContext = React.createContext<IRealmApp | void>(undefined);

export interface IRealmApp {
  id: string;
  user: Realm.User | null;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  registerUser: (email: string, password: string) => Promise<void>;
}

const RealmApp: React.FC = ({ children }) => {
  // Keep track of the current user in local state
  const appRef = React.useRef(app);
  const [user, setUser] = React.useState(app.currentUser);
  React.useEffect(() => {
    setUser(app.currentUser);
  }, [appRef.current.currentUser]);

  // Let new users register an account
  const registerUser = async (email: string, password: string) => {
    return await app.emailPasswordAuth.registerUser(email, password);
  };

  // Let registered users log in
  const logIn = async (email: string, password: string) => {
    // TODO: Log in with the specified email and password
    const credentials = RealmWeb.Credentials.emailPassword(email, password);
    await app.logIn(credentials);
    setUser(app.currentUser);
  };

  // Let logged in users log out
  const logOut = async () => {
    // TODO: Log the current user out
    await app.currentUser?.logOut();
    setUser(app.currentUser);
  };

  // Provide the current user and authentication methods to the wrapped tree
  const context: IRealmApp = {
    id: REALM_APP_ID,
    user,
    logIn,
    logOut,
    registerUser,
  };
  return (
    <RealmAppContext.Provider value={context}>
      {children}
    </RealmAppContext.Provider>
  );
};
export default RealmApp;

export const useRealmApp = (): IRealmApp => {
  const app = React.useContext(RealmAppContext);
  if (!app) {
    throw new Error("You must call useRealmApp() inside of a <RealmApp />.");
  }
  return app;
};
