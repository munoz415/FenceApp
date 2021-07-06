import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const lumberItems = ['2X4', '4X4', '4X8'];

const SettingsScreen = () => {
  const [selectedLumberItem, setSelectedLumberItem] = useState();
  const [lumberItemPrice, onChangeLumberItemPrice] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'stretch', alignItems: 'center', marginTop: 16}}>
        <Text style={{fontFamily: 'serif', fontSize: 18}}>
          Select Materials
        </Text>
        <Picker
          style={{alignSelf: 'stretch'}}
          selectedValue={selectedLumberItem}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedLumberItem(itemValue);
            console.log(itemValue);
          }}>
          {lumberItems.map(item => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
        <View style={{alignSelf: "stretch", alignItems: "center", flexDirection: "row", marginHorizontal: 16}}>
          <Text
            style={{
              fontFamily: 'serif',
              fontSize: 18,
              marginRight: 16,
            }}>
            Price
          </Text>
          <TextInput
            style={{backgroundColor: "#fff"}}
            value={lumberItemPrice}
            placeholder={"Lumber Item Price"}
            onChangeText={onChangeLumberItemPrice}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5a5b5e',
    flex: 1,
  },
});

export default SettingsScreen;
