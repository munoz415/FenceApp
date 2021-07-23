import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
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
          <Text style={{marginTop: 16}}>Select an Option</Text>
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
          <TouchableOpacity
            style={styles.button}
            onPress={settingsButtonPressed}>
            <View>
              <Text style={styles.buttonText}>Settings</Text>
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
    backgroundColor: '#5a5b5e',
    flex: 1,
  },
  title: {
    color: '#cfab1f',
    fontSize: 30,
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  buttonText: {
    marginVertical: 8,
  },
});

export default WelcomeScreen;
