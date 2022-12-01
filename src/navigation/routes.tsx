import React, {useContext, useEffect, useState} from 'react';
import {AuthStack} from './stacks/auth-stack';
import {HomeStack} from './stacks/home-stack';
import {AuthContext} from 'src/providers/auth-provider';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const RootNavigation = () => {
  const {user, setUser} = useContext(AuthContext);
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
