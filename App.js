import React from 'react';
import { StyleSheet } from 'react-native';

import Login from './App/screens/Login';
import Profile from './App/screens/Profile';
import Signin from './App/screens/Signin';
import SignUpWithEmail from './App/screens/SignUpWithEmail';
import SignUp from './App/screens/SignUp';

export default function App() {
  return (
    <>
      {/* <Signin /> */}
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <SignUp /> */}
      <SignUpWithEmail />
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
