import {FC} from 'react';
import {MainWrapper, Overlay} from './styles';
import {ChildrenProp} from 'src/types/children';
import {useTabBarContext} from 'src/context';

export const Wrapper: FC<ChildrenProp> = ({children}) => {
  const {isOpenRadialMenu} = useTabBarContext();
  return (
    <>
      <MainWrapper showsVerticalScrollIndicator={false}>{children}</MainWrapper>
      {isOpenRadialMenu ? <Overlay /> : null}
    </>
  );
};
