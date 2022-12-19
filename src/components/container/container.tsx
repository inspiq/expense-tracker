import {FC} from 'react';
import {MainContainer} from './styles';
import {ChildrenProp} from 'src/types/children';

export const Container: FC<ChildrenProp> = ({children}) => {
  return <MainContainer>{children}</MainContainer>;
};
