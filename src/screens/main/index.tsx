import React from 'react';
import { StyleSheet, View } from 'react-native';

import Setup from '../setup';
import Storybook from '../../../storybook'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Workout from '../workout';
import { NavigationPropList, NavigationScreens } from '../../models';

const Stack = createNativeStackNavigator<NavigationPropList>();

const Main = () => {

  // return <Storybook />;

  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={NavigationScreens.Setup} component={Setup} />
        <Stack.Screen name={NavigationScreens.Workout} component={Workout} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hiddenButton: {
    position: 'absolute',
    top: 50,
    end: 0,
    height: 30,
    width: 30,
    backgroundColor: 'blue'
  }
});

export default Main;
