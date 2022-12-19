import {ChildrenProp} from 'src/types/children';
import {TitleName} from './styles';

export const Title = ({children}: ChildrenProp) => {
  return <TitleName>{children}</TitleName>;
};
