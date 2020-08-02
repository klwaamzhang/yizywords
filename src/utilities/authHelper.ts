import { IRealmApp } from "../realm/RealmApp";

export const handleLogin = async (
  realmApp: IRealmApp,
  email: string,
  password: string
) => {
  try {
    return await realmApp.logIn(email, password);
  } catch (err) {
    window.alert(err);
  }
};

export const handleRegistration = async (
  realmApp: IRealmApp,
  email: string,
  password: string
) => {
  try {
    // Register the user and, if successful, log them in
    await realmApp.registerUser(email, password);
    return await handleLogin(realmApp, email, password);
  } catch (err) {
    window.alert(err);
  }
};
