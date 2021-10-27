/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Storybook from './storybook'
import LinearGradient from 'react-native-linear-gradient';
import Main from './src/screens/main';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [storybook, setStorybook] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const toggleStorybook = useCallback(() => {
    setStorybook(value => !value);
  }, [setStorybook]);

  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.container, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <LinearGradient colors={['red', 'green', 'blue']} style={{ width: '100%', height: '120%', position: 'absolute' }}>
          <View style={styles.container}>
            {storybook ?
              <Storybook /> :
              <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} />
              </Stack.Navigator>
            }
            <Pressable onPress={toggleStorybook} style={styles.hiddenButton} />
            {/* <LinearGradient colors={['red', 'green', 'blue']} style={{ width: 200, height: 200, position: 'absolute' }}></LinearGradient> */}
          </View>
        </LinearGradient>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hiddenButton: {
    position: 'absolute',
    top: 0,
    end: 0,
    height: 30,
    width: 30,
  }
});

export default App;
