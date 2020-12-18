import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './App/screens/Login';
import Profile from './App/screens/Profile';
import Signin from './App/screens/Signin';
import SignUp from './App/screens/SignUp';
import SignUpWithEmail from './App/screens/SignUpWithEmail';
import SignUpWithNumber from './App/screens/SignUpWithNumber';
import VerifyCode from './App/screens/VerifyCode';
import SwapImage from './App/screens/SwapImage';
import Contact from './App/screens/Contact';



const Stack = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator
          drawerStyle={{
            width: "0%"
          }} initialRouteName="SwapImage">
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUpWithNumber" component={SignUpWithNumber} />
          <Stack.Screen name="SignUpWithEmail" component={SignUpWithEmail} />
          <Stack.Screen name="VerifyCode" component={VerifyCode} />
          <Stack.Screen name="SwapImage" component={SwapImage} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
