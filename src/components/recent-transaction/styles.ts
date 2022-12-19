import {mainStyles} from 'src/variables/styles';
import styled from 'styled-components/native';

export const WrapperCard = styled.View`
  width: 100%;
`;

export const Bars = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonSeeAll = styled.TouchableOpacity`
  padding: 8px 16px;
  text-align: center;
  background: ${mainStyles.color.violet20};
  border-radius: 40px;
`;

export const ButtonTitle = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.regular2}px;
  line-height: ${mainStyles.height.regular2height}px;
  color: ${mainStyles.color.violet100};
`;

export const RecentTransactionCards = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.View`
  margin: 5px 0px;
`;
