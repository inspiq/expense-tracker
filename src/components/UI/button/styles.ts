import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';

export const MainButton = styled.View<{isPrimaryBackground?: boolean}>`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({isPrimaryBackground}) =>
    isPrimaryBackground
      ? mainStyles.color.violet100
      : mainStyles.color.violet20};
  border-radius: 16px;
`;

export const TextButton = styled.Text<{isPrimaryColor?: boolean}>`
  color: ${({isPrimaryColor}) =>
    isPrimaryColor ? mainStyles.color.light80 : mainStyles.color.violet100};
  font-family: ${mainStyles.family.interSemiBold};
  font-size: ${mainStyles.size.title3}px;
  line-height: ${mainStyles.height.title2height}px;
`;
