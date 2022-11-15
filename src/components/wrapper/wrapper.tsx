import React, {FC, ReactNode} from 'react';
import {MainWrapper} from './styles';
import {ChildrenType} from '../../types/children';

const Wrapper: FC<ChildrenType> = ({children}) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Wrapper;
