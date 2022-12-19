import {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {ChildrenProp} from 'src/types/children';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

export interface ValuesProps {
  name: string;
  email: string;
  password: string;
}

GoogleSignin.configure({
  webClientId:
    '646897821710-s4up4l9pit8dpvr5j5ucteo4ehus8gga.apps.googleusercontent.com',
});

export const AuthContext = createContext<Partial<any>>({});

const AuthProvider = ({children}: ChildrenProp) => {
  const [user, setUser] = useState(null);
  const [errorLogin, setErrorLogin] = useState('');
  const [errorSignup, setErrorSignup] = useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        errorLogin,
        errorSignup,
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
            setErrorSignup('');
          } catch (e) {
            setErrorSignup('This mail is already in use');
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
