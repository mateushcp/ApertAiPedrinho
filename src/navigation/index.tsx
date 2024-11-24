import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from '../screens/Splash/SplashScreen.tsx';
import LoginScreen from '../screens/Login/LoginScreen.tsx';
import HomeScreen from '../screens/Home/HomeScreen.tsx';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
