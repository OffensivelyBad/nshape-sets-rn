/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useEffect, useState } from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Storybook from './storybook'
import Main from './src/screens/main';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorStore } from './src/stores';
import { DarkColor, LightColor } from './src/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { setColors } = useColorStore();
  const [storybook, setStorybook] = useState(false);

  useEffect(() => {
    setColors(isDarkMode ? DarkColor : LightColor);
  }, [isDarkMode, setColors]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const toggleStorybook = useCallback(() => {
    setStorybook(value => !value);
  }, [setStorybook]);

  return (
    <NavigationContainer>
      <View style={[styles.container, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.container}>
          {storybook ?
            <Storybook /> :
            <>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false
                }}
              >
                <Stack.Screen name="Main" component={Main} />
              </Stack.Navigator>
            </>
          }
          <Pressable onPress={toggleStorybook} style={styles.hiddenButton} />
        </View>
      </View>
    </NavigationContainer>
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

export default App;
