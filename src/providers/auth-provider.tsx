import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {ChildrenType} from 'src/types/children';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface ValuesProps {
  email: string;
  password: string;
}

GoogleSignin.configure({
  webClientId: '646897821710-s4up4l9pit8dpvr5j5ucteo4ehus8gga.apps.googleusercontent.com',
});

export const AuthContext = createContext<any>({});

const AuthProvider = ({children}: ChildrenType) => {
  const [user, setUser] = useState(null);
  const [errorLogin, setErrorLogin] = useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        errorLogin,
        login: async (values: ValuesProps) => {
          try {
            await auth().signInWithEmailAndPassword(
              values.email,
              values.password,
            );
            setErrorLogin('');
          } catch (e) {
            setErrorLogin(
              'This email does not exist or the password is incorrect',
            );
          }
        },
        signup: async (values: ValuesProps) => {
          try {
            await auth().createUserWithEmailAndPassword(
              values.email,
              values.password,
            );
          } catch (e) {
            console.log(e);
          }
        },
        loginGoogle: async () => {
          try {
            await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });

            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            return auth().signInWithCredential(googleCredential);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
