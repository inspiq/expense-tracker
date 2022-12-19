import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {RoundButton} from 'src/components';

export const RoundButtonScreen = () => {
  const navigation = useNavigation();
  return <RoundButton navigation={navigation} />;
};
