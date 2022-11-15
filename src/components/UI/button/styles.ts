import styled from 'styled-components/native';
import {mainStyles} from '../../../variables/styles';

export const MainButton = styled.View<{primary: boolean}>`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.primary ? mainStyles.color.violet100 : mainStyles.color.violet20};
  border-radius: 16px;
`;

export const TextButton = styled.Text<{primary: boolean}>`
  color: ${props =>
    props.primary ? mainStyles.color.light80 : mainStyles.color.violet100};
  font-family: ${mainStyles.family.interSemiBold};
  font-size: ${mainStyles.size.title3};
  line-height: ${mainStyles.height.title3height};
`;
