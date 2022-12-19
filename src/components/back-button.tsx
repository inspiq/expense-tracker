import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowBackIcon} from 'src/icons';
import {useNavigation} from 'src/navigation/routes';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowBackIcon />
    </TouchableOpacity>
  );
};
