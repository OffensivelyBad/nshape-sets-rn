/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import Main from './src/screens/main';
import { NavigationContainer } from '@react-navigation/native';
import { useColorStore } from './src/stores';
import { DarkColor, LightColor } from './src/theme';
import { requestUserPermission } from './src/utils/notifications';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { setColors, colors } = useColorStore();

  useEffect(() => {
    setColors(isDarkMode ? DarkColor : LightColor);
  }, [isDarkMode, setColors]);

  useEffect(() => {
    requestUserPermission();
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.backgroundTop}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Main />
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
