import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabTitle, TabItem} from './styles';
import {
  HomeScreen,
  TransactionScreen,
  BudgetScreen,
  ProfileScreen,
  RoundButtonScreen,
} from 'src/screens';
import {
  BudgetIcon,
  HomeIcon,
  ProfileIcon,
  TabContainer,
  TransactionIcon,
} from 'src/icons';
import {Header, RoundButton} from 'src/components';
import {Screens} from '../routes';
import {mainStyles} from 'src/variables/styles';

const Tab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          height: 68,
          borderBottomWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: mainStyles.color.violet100,
        tabBarInactiveTintColor: mainStyles.color.grey,
        tabBarBackground: TabContainer,
      }}
      initialRouteName={Screens.Home}>
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          header: Header,
          tabBarIcon: ({color}) => (
            <TabItem>
              <HomeIcon color={color} />
              <TabTitle color={color}>Home</TabTitle>
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Transaction}
        component={TransactionScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabItem>
              <TransactionIcon color={color} />
              <TabTitle color={color}>Transaction</TabTitle>
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name={Screens.RoundButton}
        component={RoundButtonScreen}
        options={{
          tabBarButton: RoundButton,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Screens.Budget}
        component={BudgetScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabItem>
              <BudgetIcon color={color} />
              <TabTitle color={color}>Budget</TabTitle>
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabItem>
              <ProfileIcon color={color} />
              <TabTitle color={color}>Profile</TabTitle>
            </TabItem>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabComponent;
