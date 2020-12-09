import React from 'react';
import { StyleSheet } from 'react-native';

import Login from './App/screens/Login';
import Profile from './App/screens/Profile';
import Signin from './App/screens/Signin';

export default function App() {
  return (
    <>
      {/* <Signin /> */}
      {/* <Login /> */}
      <Profile />
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
