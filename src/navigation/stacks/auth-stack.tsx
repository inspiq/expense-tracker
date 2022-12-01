import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from 'src/screens/start-screen';
import React from 'react';
import SignUpScreen from 'src/screens/sign-up-screen';
import LoginScreen from 'src/screens/login-screen';
import HomeScreen from 'src/screens/home-screen';
import {defaultStyles} from './header-styles';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            ...defaultStyles,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            ...defaultStyles,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            ...defaultStyles,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
