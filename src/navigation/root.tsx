import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAuthContext} from 'src/context';
import {AuthStack, HomeStack} from './stacks';

const RootNavigation = () => {
  const {user, setUser} = useAuthContext();

  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return user ? <HomeStack /> : <AuthStack />;
};

export default RootNavigation;
