import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from 'src/screens/home-screen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
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
