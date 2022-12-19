import {FC} from 'react';
import {MainButton, TextButton} from './styles';
import {ChildrenProp} from 'src/types/children';

interface ButtonProps {
  isPrimaryBackground?: boolean;
  isPrimaryColor?: boolean;
}

type Props = ChildrenProp & ButtonProps;

export const Button: FC<Props> = ({
  children,
  isPrimaryBackground,
  isPrimaryColor,
}) => {
  return (
    <MainButton isPrimaryBackground={isPrimaryBackground}>
      <TextButton isPrimaryColor={isPrimaryColor}>{children}</TextButton>
    </MainButton>
  );
};
