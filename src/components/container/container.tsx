import React, {FC} from 'react';
import {MainContainer} from './styles';
import {ChildrenType} from '../../types/children';

const Container: FC<ChildrenType> = ({children}) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
