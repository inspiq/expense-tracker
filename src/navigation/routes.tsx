import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from '../screens/start-screen';
import AuthorizationScreen from '../screens/authorization-screen';
import RegistrationScreen from '../screens/registration-screen';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Authorization"
          component={AuthorizationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
