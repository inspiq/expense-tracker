import { mainStyles } from 'src/variables/styles';
import styled from 'styled-components/native';

export const TabItems = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border: 1px solid ${mainStyles.color.light80};
  border-radius: 16px;
  margin-bottom: 15px;
`;
