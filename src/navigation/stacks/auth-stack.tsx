import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {defaultOptions} from './default-options';
import {SignUpScreen, StartScreen, LoginScreen} from 'src/screens';
import {Screens} from '../routes';
import {BackButton} from 'src/components';

const Auth = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator initialRouteName={Screens.Start}>
        <Auth.Screen
          name={Screens.Start}
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Auth.Screen
          name={Screens.Login}
          component={LoginScreen}
          options={{
            title: 'Login',
            ...defaultOptions,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerLeft: BackButton,
          }}
        />
        <Auth.Screen
          name={Screens.SignUp}
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            ...defaultOptions,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerLeft: BackButton,
          }}
        />
      </Auth.Navigator>
    </NavigationContainer>
  );
};
