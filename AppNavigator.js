import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';
import Signin from './src/screens/signin/SignIn';
import Home from './src/screens/home/HomeScreen';
import Signup from './src/screens/signup/Signup';
import SignupSuccess from './src/screens/signupSuccess/SignupSuccess';
import Setup from './src/screens/setup/Setup';
import SelectHcp from './src/screens/selectHcp/SelectHcp';
//this is to disable deprication waring of react-native-gesture-handler
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup-success"
          component={SignupSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="setup"
          component={Setup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="select-hcp"
          component={SelectHcp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
