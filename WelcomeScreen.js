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

const WelcomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const buttonPressed = () => {
    console.log('Pressed');
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{alignSelf: 'stretch', alignItems: 'center', marginTop: 16}}>
          <Text style={styles.title}>Total Fence</Text>
          <Text style={{marginTop: 16}}>Select an Option</Text>
          <TouchableOpacity style={styles.button} onPress={buttonPressed}>
            <View>
              <Text style={styles.buttonText}>Get a Quote</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={buttonPressed}>
            <View>
              <Text style={styles.buttonText}>View Past Quotes</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
