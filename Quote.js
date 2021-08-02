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

const QuoteScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{alignSelf: 'stretch', alignItems: 'center', marginTop: 16}}>
          <Text style={{fontSize: 18}}>Select Attributes</Text>
          <Text style={{fontSize: 16, marginTop: 16}}>Side Lengths</Text>
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
  container: {
    backgroundColor: '#5a5b5e',
    flex: 1,
  },
});

export default QuoteScreen;
