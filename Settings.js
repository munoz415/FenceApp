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
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lumberItems = ['2X4', '4X4', '4X8'];
const steelItems = ['8 in. post'];

const SettingsScreen = () => {
  const [selectedLumberItem, setSelectedLumberItem] = useState(0);
  const [lumberItemPrice, onChangeLumberItemPrice] = useState('');
  const [selectedSteelItem, setSelectedSteelItem] = useState(0);
  const [steelItemPrice, onChangeSteelItemPrice] = useState('');
  const [laborPrice, onChangeLaborItemPrice] = useState('');
  const save = async () => {
    const itemName = lumberItems[selectedLumberItem];
    try {
      await AsyncStorage.setItem(itemName, lumberItemPrice, async () => {
        try {
          const value = await AsyncStorage.getItem(itemName);
          console.log(value);
        } catch (e) {}
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'stretch', alignItems: 'center', marginTop: 16}}>
        <Text style={{fontSize: 18}}>Select Materials</Text>
        <Text style={{fontSize: 18, marginTop: 16}}>Lumber</Text>
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
        <View style={styles.priceArea}>
          <Text style={styles.priceChars}>Price</Text>
          <TextInput
            style={{backgroundColor: '#fff'}}
            value={lumberItemPrice}
            placeholder={'Lumber Item Price'}
            onChangeText={onChangeLumberItemPrice}
          />
          <TouchableOpacity style={styles.button} onPress={save}>
            <View>
              <Text style={styles.buttonText}>Set Price</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 18, marginTop: 20}}>Steel/Hardware</Text>
        <Picker
          style={{alignSelf: 'stretch'}}
          selectedValue={selectedSteelItem}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedSteelItem(itemValue);
            console.log(itemValue);
          }}>
          {steelItems.map(item => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
        <View style={styles.priceArea}>
          <Text style={styles.priceChars}>Price</Text>
          <TextInput
            style={{backgroundColor: '#fff'}}
            value={steelItemPrice}
            placeholder={'Steel/Hardware Item Price'}
            onChangeText={onChangeSteelItemPrice}
          />
          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.buttonText}>Set Price</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 18, marginTop: 20, marginBottom: 16}}>
          Labor
        </Text>
        <View style={styles.priceArea}>
          <Text style={styles.priceChars}>Price</Text>
          <TextInput
            style={{backgroundColor: '#fff'}}
            value={laborPrice}
            placeholder={'Labor Price'}
            onChangeText={onChangeLaborItemPrice}
          />
          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.buttonText}>Set Price</Text>
            </View>
          </TouchableOpacity>
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
  priceArea: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  priceChars: {
    fontSize: 18,
    marginRight: 16,
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
});

export default SettingsScreen;
