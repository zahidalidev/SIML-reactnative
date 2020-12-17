import React from 'react';
import { StyleSheet } from 'react-native';

import Login from './App/screens/Login';
import Profile from './App/screens/Profile';
import Signin from './App/screens/Signin';
import SignUp from './App/screens/SignUp';
import SignUpWithEmail from './App/screens/SignUpWithEmail';
import SignUpWithNumber from './App/screens/SignUpWithNumber';
import VerifyCode from './App/screens/VerifyCode';
import SwapImage from './App/screens/SwapImage';
import Contact from './App/screens/Contact';

export default function App() {
  return (
    <>
      {/* <Signin /> */}
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <SignUp /> */}
      {/* <SignUpWithNumber /> */}
      {/* <SignUpWithEmail /> */}
      {/* <VerifyCode /> */}
      {/* <SwapImage /> */}
      <Contact />
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
