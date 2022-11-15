import React, {FC} from 'react';
import {MainButton, TextButton} from './styles';
import {ChildrenType} from '../../../types/children';
import {ButtonType} from '../../../types/button';

type Props = ChildrenType & ButtonType;

const Button: FC<Props> = ({children, primary}) => {
  return (
    <MainButton primary={primary}>
      <TextButton primary={primary}>{children}</TextButton>
    </MainButton>
  );
};

export default Button;
