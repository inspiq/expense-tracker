import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ParamListBase,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native';

export enum Screens {
  Home = 'Home',
  Transaction = 'Transaction',
  RoundButton = 'RoundButton',
  Budget = 'Budget',
  Profile = 'Profile',
  Tab = 'Tab',
  Expense = 'Expense',
  Income = 'Income',
  Start = 'Start',
  Login = 'Login',
  SignUp = 'SignUp',
}

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Screens>>();
