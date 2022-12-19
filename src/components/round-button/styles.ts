import styled from 'styled-components/native';
import {mainStyles} from 'src/variables/styles';

export const ButtonOpen = styled.TouchableOpacity<{
  isOpenRadialMenu: boolean;
}>`
  width: 56px;
  height: 56px;
  background: ${mainStyles.color.violet100};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 8px;
  transform: rotate(${({isOpenRadialMenu}) => (isOpenRadialMenu ? 45 : 0)}deg);
  margin: 0px 10px;
`;

export const ButtonIncome = styled.TouchableOpacity<{
  isOpenRadialMenu: boolean;
}>`
  width: 56px;
  height: 56px;
  background: ${mainStyles.color.green100};
  border-radius: 50px;
  display: ${({isOpenRadialMenu}) => (isOpenRadialMenu ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -50px;
  bottom: 80px;
`;

export const ButtonExpense = styled.TouchableOpacity<{
  isOpenRadialMenu: boolean;
}>`
  width: 56px;
  height: 56px;
  background: ${mainStyles.color.red100};
  border-radius: 50px;
  display: ${({isOpenRadialMenu}) => (isOpenRadialMenu ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 70px;
  bottom: 80px;
`;

export const ButtonTransaction = styled.TouchableOpacity<{
  isOpenRadialMenu: boolean;
}>`
  width: 56px;
  height: 56px;
  background: ${mainStyles.color.blue100};
  border-radius: 50px;
  display: ${({isOpenRadialMenu}) => (isOpenRadialMenu ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  bottom: 140px;
`;

export const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
