import {useTabBarContext} from 'src/context';
import {
  CloseIcon,
  ExpenseIcon,
  IncomeIcon,
  TransactionCircleIcon,
} from 'src/icons';
import {useNavigation} from 'src/navigation/routes';
import {
  ButtonExpense,
  ButtonIncome,
  ButtonOpen,
  ButtonsWrapper,
  ButtonTransaction,
} from './styles';

export const RoundButton = () => {
  const {SetIsOpenRadialMenu, isOpenRadialMenu} = useTabBarContext();
  const navigation = useNavigation();
  return (
    <ButtonsWrapper>
      <ButtonIncome
        isOpenRadialMenu={isOpenRadialMenu}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Income')}>
        <IncomeIcon />
      </ButtonIncome>
      <ButtonOpen
        isOpenRadialMenu={isOpenRadialMenu}
        onPress={() => SetIsOpenRadialMenu(!isOpenRadialMenu)}
        activeOpacity={0.8}>
        <CloseIcon />
      </ButtonOpen>
      <ButtonExpense
        isOpenRadialMenu={isOpenRadialMenu}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Expense')}>
        <ExpenseIcon />
      </ButtonExpense>
      <ButtonTransaction
        isOpenRadialMenu={isOpenRadialMenu}
        activeOpacity={0.8}
        onPress={() => {}}>
        <TransactionCircleIcon />
      </ButtonTransaction>
    </ButtonsWrapper>
  );
};
