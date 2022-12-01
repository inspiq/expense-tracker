import React, {FC} from 'react';
import {MainWrapper} from './styles';
import {ChildrenType} from 'src/types/children';

const Wrapper: FC<ChildrenType> = ({children}) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Wrapper;
