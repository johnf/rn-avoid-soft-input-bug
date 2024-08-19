/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AvoidSoftInput } from 'react-native-avoid-softinput';

import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';

export const useAvoidSoftInput = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    return () => {
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, []);

  useFocusEffect(onFocusEffect);
};


const mainStyle = {
  flex: 1,
};
const HomeScreen = ({ navigation }) => {
  return (
  <View style={mainStyle}>
    <Text style={{ fontSize: 24 }}>Home Screen</Text>
    <Button title="Go to First" onPress={() => navigation.navigate('First')} />
  </View>
);
};

const FirstScreen = ({ navigation }) => {
  useAvoidSoftInput();
  return (
  <View style={mainStyle}>
    <Text style={{ fontSize: 24 }}>First Screen</Text>
    <Button title="Go to Second" onPress={() => navigation.navigate('Second')} />
  </View>
);
};

const SecondScreen = ({ navigation }) => {
  useAvoidSoftInput();
  return (
  <View style={mainStyle}>
    <Text style={{ fontSize: 24 }}>Second Screen</Text>
    <Button title="Go to Third" onPress={() => navigation.navigate('Third')} />
  </View>
);
};

const ThirdScreen = () => {
  return (
  <View style={mainStyle}>
    <Text style={{ fontSize: 24 }}>Third Screen</Text>
  </View>
);
};


const AppStack = createStackNavigator();

const AppNavigator = () => (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="First" component={FirstScreen} />
        <AppStack.Screen name="Second" component={SecondScreen} />
        <AppStack.Screen name="Third" component={ThirdScreen} />
      </AppStack.Navigator>
);

const RootStack = createStackNavigator();

const RootNavigator = () => (
  <View style={{ flex: 1 }}>
    <NavigationContainer>
      <RootStack.Navigator
        // key={authUser ? 'authenticated' : 'unauthenticated'}
        screenOptions={{ headerShown: false }}
      >
        {/* {authUser ? ( */}
          <AppStack.Screen name="App" component={AppNavigator} />
        {/* ) : ( */}
          {/* <Stack.Screen name="Auth" component={AuthNavigator} /> */}
        {/* )} */}
      </RootStack.Navigator>
    </NavigationContainer>
  </View>
);

const App = () => <RootNavigator />;

export default App;
