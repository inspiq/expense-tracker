import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from '../screens/start-screen';
import React from 'react';
import SignUpScreen from '../screens/sign-up-screen';
import LoginScreen from '../screens/login-screen';

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
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleStyle: {
              color: '#212325',
              fontFamily: 'Inter-SemiBold',
              fontSize: 18,
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleStyle: {
              color: '#212325',
              fontFamily: 'Inter-SemiBold',
              fontSize: 18,
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
