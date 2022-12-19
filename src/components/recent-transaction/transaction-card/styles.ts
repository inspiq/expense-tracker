import {mainStyles} from 'src/variables/styles';
import styled from 'styled-components/native';

export const TransactionCard = styled.View`
  width: 100%;
  padding: 15px;
  background: ${mainStyles.color.light80};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TransactionInfo = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TransactionCategory = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.regular1}px;
  line-height: ${mainStyles.height.regular1height}px;
  color: ${mainStyles.color.dark25};
  margin-bottom: 10px;
`;

export const TransactionDescription = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.small}px;
  line-height: ${mainStyles.height.smallheight}px;
  color: ${mainStyles.color.light20};
`;

export const TransactionInfoLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TransactionInfoRight = styled.View`
  align-items: flex-end;
`;

export const TransactionPrice = styled.Text`
  font-family: ${mainStyles.family.interSemiBold};
  font-size: ${mainStyles.size.regular1}px;
  line-height: ${mainStyles.height.regular1height}px;
  color: ${mainStyles.color.red100};
  margin-bottom: 10px;
`;

export const TransactionTime = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.small}px;
  line-height: ${mainStyles.height.smallheight}px;
  color: ${mainStyles.color.light20};
`;
