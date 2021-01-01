import React from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './App/screens/Login';
import CreateProfile from './App/screens/CreateProfile';
import Signin from './App/screens/Signin';
import SignUp from './App/screens/SignUp';
import SignUpWithEmail from './App/screens/SignUpWithEmail';
import SignUpWithNumber from './App/screens/SignUpWithNumber';
import VerifyCode from './App/screens/VerifyCode';
import SwapImage from './App/screens/SwapImage';
import SwapImageDetail from './App/screens/SwapImageDetail';
import Contact from './App/screens/Contact';
import ProfileDetail from './App/screens/ProfileDetail';
import InvitationList from './App/screens/InvitationList';
import Search from './App/screens/Search';
import ContactsPage from './App/screens/ContactsPage';
import UserProfile from './App/screens/UserProfile';
import Settings from './App/screens/Settings';
import InviteFriends from './App/screens/InviteFriends';
import CreateGroupNameImage from './App/screens/CreateGroupNameImage';
import groups from './App/screens/groups';

LogBox.ignoreAllLogs()

const Stack = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator
          drawerStyle={{
            width: "0%"
          }} initialRouteName="groups">
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUpWithNumber" component={SignUpWithNumber} />
          <Stack.Screen name="SignUpWithEmail" component={SignUpWithEmail} />
          <Stack.Screen name="VerifyCode" component={VerifyCode} />
          <Stack.Screen name="SwapImage" component={SwapImage} />
          <Stack.Screen name="SwapImageDetail" component={SwapImageDetail} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="CreateProfile" component={CreateProfile} />
          <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
          <Stack.Screen name="InvitationList" component={InvitationList} />
          <Stack.Screen name="ContactsPage" component={ContactsPage} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="InviteFriends" component={InviteFriends} />
          <Stack.Screen name="CreateGroupNameImage" component={CreateGroupNameImage} />
          <Stack.Screen name="groups" component={groups} />
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
