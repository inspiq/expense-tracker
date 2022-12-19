import {TouchableOpacity, View} from 'react-native';
import {
  ArrowIcon,
  ExpenseTransparentIcon,
  IncomeTransparentIcon,
  NotificationIcon,
} from 'src/icons';
import {Container} from 'src/components';
import {
  BalanceTitle,
  Balance,
  TransactionButtons,
  WrapperIcon,
  TransactionPrice,
  TransactionButton,
  TransactionInfo,
  TransactionTitle,
  WrapperAvatar,
  Avatar,
  SelectMonth,
  MonthTitle,
  HeaderNavigation,
  WrapperHeader,
  Separator,
} from './styles';
import {useAuthContext} from 'src/context';

export const Header = () => {
  const {user} = useAuthContext();
  return (
    <WrapperHeader>
      <Container>
        <HeaderNavigation>
          <WrapperAvatar>
            {user.photoURL == undefined || null ? (
              <Avatar source={require('assets/images/avatar.png')} />
            ) : (
              <Avatar source={{uri: user.photoURL}} />
            )}
          </WrapperAvatar>
          <SelectMonth activeOpacity={0.8}>
            <ArrowIcon />
            <MonthTitle>October</MonthTitle>
          </SelectMonth>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <NotificationIcon />
          </TouchableOpacity>
        </HeaderNavigation>
        <BalanceTitle>Account Balance</BalanceTitle>
        <Balance>$9400</Balance>
        <TransactionButtons>
          <TransactionButton
            onPress={() => {}}
            activeOpacity={0.8}
            isPrimaryBackground>
            <TransactionInfo>
              <WrapperIcon>
                <ExpenseTransparentIcon />
              </WrapperIcon>
              <View>
                <TransactionTitle>Expenses</TransactionTitle>
                <TransactionPrice>$1200</TransactionPrice>
              </View>
            </TransactionInfo>
          </TransactionButton>
          <Separator />
          <TransactionButton onPress={() => {}} activeOpacity={0.8}>
            <TransactionInfo>
              <WrapperIcon>
                <IncomeTransparentIcon />
              </WrapperIcon>
              <View>
                <TransactionTitle>Income</TransactionTitle>
                <TransactionPrice>$5000</TransactionPrice>
              </View>
            </TransactionInfo>
          </TransactionButton>
        </TransactionButtons>
      </Container>
    </WrapperHeader>
  );
};
