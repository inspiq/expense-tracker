import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultOptions} from './default-options';
import {ExpenseScreen, IncomeScreen} from 'src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {Screens} from '../routes';
import TabComponent from '../tabbar/tabbar';

const Home = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <NavigationContainer>
      <Home.Navigator initialRouteName={Screens.Tab}>
        <Home.Screen
          name={Screens.Tab}
          component={TabComponent}
          options={{headerShown: false}}
        />
        <Home.Screen
          name={Screens.Expense}
          component={ExpenseScreen}
          options={{
            title: 'Expense',
            ...defaultOptions,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Home.Screen
          name={Screens.Income}
          component={IncomeScreen}
          options={{
            title: 'Income',
            ...defaultOptions,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
      </Home.Navigator>
    </NavigationContainer>
  );
};
