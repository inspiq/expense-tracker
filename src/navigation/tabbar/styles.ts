import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';

export const TabItem = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabTitle = styled.Text<{color: string}>`
  font-size: ${mainStyles.size.tabSize}px;
  font-family: ${mainStyles.family.interMedium};
  color: ${({color}) => color};
`;
