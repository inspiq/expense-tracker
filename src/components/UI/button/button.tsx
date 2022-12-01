import React, {FC} from 'react';
import {MainButton, TextButton} from './styles';
import {ChildrenType} from 'src/types/children';
import {ButtonType} from 'src/types/button';

type Props = ChildrenType & ButtonType;

const Button: FC<Props> = ({children, isPrimaryBackground, isPrimaryColor}) => {
  return (
    <MainButton isPrimaryBackground={isPrimaryBackground}>
      <TextButton isPrimaryColor={isPrimaryColor}>{children}</TextButton>
    </MainButton>
  );
};

export default Button;
