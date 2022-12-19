import {mainStyles} from 'src/variables/styles';
import styled from 'styled-components/native';

export const TabItem = styled.TouchableOpacity<{
  activeTabTime: number;
  index: number;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 20px;
  background: ${({index, activeTabTime}) =>
    activeTabTime === index
      ? mainStyles.color.yellow20
      : mainStyles.color.light100};
  border-radius: 16px;
`;

export const TabTitle = styled.Text<{
  activeTabTime: number;
  index: number;
}>`
  font-family: ${({index, activeTabTime}) =>
    activeTabTime === index
      ? mainStyles.family.interBold
      : mainStyles.family.interMedium};
  font-size: ${mainStyles.size.regular2}px;
  line-height: ${mainStyles.height.regular2height}px;
  color: ${({index, activeTabTime}) =>
    activeTabTime === index
      ? mainStyles.color.yellow100
      : mainStyles.color.light20};
`;
