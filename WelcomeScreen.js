import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {backgroundColor, mainColor, textColor} from './colors.js';

const WelcomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const settingsButtonPressed = () => {
    console.log('Pressed');
    navigation.navigate('Settings');
  };
  const quoteButtonPressed = () => {
    console.log('Pressed');
    navigation.navigate('Quote');
  };
  const pastButtonPressed = () => {
    console.log('Pressed');
    navigation.navigate('PastQuote');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.welcomeScreen}>
          <Text style={styles.title}>Total Fence</Text>
          <Text style={{marginTop: 16, color: '#293e3c'}}>
            Select an Option
          </Text>
          <TouchableOpacity style={styles.button} onPress={quoteButtonPressed}>
            <View>
              <Text style={styles.buttonText}>Get a Quote</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pastButtonPressed}>
            <View>
              <Text style={styles.buttonText}>View Past Quote</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeScreen: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 16,
  },
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
    backgroundColor: backgroundColor,
    flex: 1,
  },
  title: {
    color: mainColor,
    fontSize: 30,
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: textColor,
    borderRadius: 10,
  },
  buttonText: {
    marginVertical: 8,
    color: textColor,
  },
});

export default WelcomeScreen;
