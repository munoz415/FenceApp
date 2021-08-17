/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import SettingsScreen from './Settings';
import QuoteScreen from './Quote';
import PastQuoteScreen from './PastQuote';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Settings')}
                color="#fff">
                <Image
                  source={require('./assets/settingsgear.png')}
                  style={{
                    height: 22,
                    width: 22,
                    marginRight: 16,
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
        <Stack.Screen name="PastQuote" component={PastQuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    backgroundColor: '#5a5b5e',
    flex: 1,
  },
});

export default App;
