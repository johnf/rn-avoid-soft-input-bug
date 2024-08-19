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


const styles = {
  main: { flex: 1 },
  text: { fontSize: 24 },
};

const HomeScreen = ({ navigation }) => {
  // useAvoidSoftInput();
  return (
  <View style={styles.main}>
    <Text style={styles.text}>Home Screen</Text>
    <Button title="Go to First" onPress={() => navigation.navigate('First')} />
  </View>
);
};

const FirstScreen = ({ navigation }) => {
  useAvoidSoftInput();
  return (
  <View style={styles.main}>
    <Text style={styles.text}>First Screen</Text>
    <Button title="Go to Second" onPress={() => navigation.navigate('Second')} />
  </View>
);
};

const SecondScreen = ({ navigation }) => {
  useAvoidSoftInput();
  return (
  <View style={styles.main}>
    <Text style={styles.text}>Second Screen</Text>
    <Button title="Go to Third" onPress={() => navigation.navigate('Third')} />
  </View>
);
};

const ThirdScreen = () => {
  useAvoidSoftInput();
  return (
  <View style={styles.main}>
    <Text style={styles.text}>Third Screen</Text>
  </View>
);
};

const Stack = createStackNavigator();

const RootNavigator = () => (
  <View style={styles.main}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
);

const App = () => <RootNavigator />;

export default App;
