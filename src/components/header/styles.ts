import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';
import LinearGradient from 'react-native-linear-gradient';

export const HeaderNavigation = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
`;

export const WrapperHeader = styled(LinearGradient).attrs({
  colors: ['rgba(255, 246, 230, 1)', 'rgba(248, 237, 216, 0.2)'],
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding-bottom: 25px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  background: ${mainStyles.color.light100};
`;

export const BalanceTitle = styled.Text`
  color: ${mainStyles.color.light20};
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.regular2}px;
  line-height: ${mainStyles.height.regular2height}px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: ${mainStyles.color.dark75};
  font-family: ${mainStyles.family.interSemiBold};
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  margin-top: 5px;
`;

export const TransactionButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`;

export const TransactionButton = styled.TouchableOpacity<{
  isPrimaryBackground?: boolean;
}>`
  background: ${({isPrimaryBackground}) =>
    isPrimaryBackground ? mainStyles.color.green100 : mainStyles.color.red100};
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
`;

export const TransactionInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WrapperIcon = styled.View`
  background: ${mainStyles.color.light80};
  border-radius: 16px;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TransactionTitle = styled.Text`
  color: ${mainStyles.color.light80};
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.regular2}px;
  line-height: ${mainStyles.height.regular2height}px;
`;

export const TransactionPrice = styled.Text`
  color: ${mainStyles.color.light80};
  font-family: ${mainStyles.family.interSemiBold};
  font-size: 20px;
  line-height: 27px;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 50px;
`;

export const WrapperAvatar = styled.View`
  padding: 2px;
  border-radius: 100px;
  border: 2px solid ${mainStyles.color.violet100};
`;

export const SelectMonth = styled.TouchableOpacity`
  border: 1px solid ${mainStyles.color.light60};
  border-radius: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
`;

export const MonthTitle = styled.Text`
  font-family: ${mainStyles.family.interMedium};
  font-size: ${mainStyles.size.regular2}px;
  line-height: ${mainStyles.height.regular2height}px;
  color: ${mainStyles.color.dark50};
`;

export const Separator = styled.View`
  margin: 0px 8px;
`;
