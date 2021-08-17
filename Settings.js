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
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import {backgroundColor, mainColor, textColor} from './colors.js';

const lumberItems = [
  'Choice Stud (2X4X8)',
  'Treated Post (4X4X8)',
  'Cedar Picket 6" (5X6X6)',
  'Cedar Picket 6" (8X6X6)',
  'Cedar Picket 4" (5X6X6)',
  'Cedar Picket 4" (8X6X6)',
  'Cedar Picket 6"X8 in. Flat Top',
];
const otherItems = [
  'Quickrete Fastening',
  'Quickrete Hard Strength',
  'Galvanized 1.5" Nails',
  'Gate Hardware Kit',
  '8 in. Metal Post',
];
const laborItems = ['New Post Labor', 'Replacemant Post Labor'];

const SettingsScreen = () => {
  const [openLumberItems, setOpenLumberItems] = useState(false);
  const [selectedLumberItem, setSelectedLumberItem] = useState(lumberItems[0]);
  const [lumberItemPrice, onChangeLumberItemPrice] = useState('');
  const [openOtherItems, setOpenOtherItems] = useState(false);
  const [selectedOtherItem, setSelectedOtherItem] = useState(otherItems[0]);
  const [otherItemPrice, onChangeOtherItemPrice] = useState('');
  const [openLaborItems, setOpenLaborItems] = useState(false);
  const [selectedLaborItem, setSelectedLaborItem] = useState(laborItems[0]);
  const [laborPrice, onChangeLaborItemPrice] = useState('');
  const save = async (item, price) => {
    try {
      await AsyncStorage.setItem(item, price, async () => {
        try {
          const value = await AsyncStorage.getItem(item);
          console.log(value);
        } catch (e) {}
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{alignSelf: 'stretch', alignItems: 'center', marginTop: 16}}>
          <Text style={{fontSize: 18, color: mainColor}}>Select Materials</Text>
          <Text style={{fontSize: 18, marginTop: 16, color: textColor}}>
            Lumber
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openLumberItems}
            value={selectedLumberItem}
            items={lumberItems.map(item => ({label: item, value: item}))}
            setOpen={setOpenLumberItems}
            setValue={setSelectedLumberItem}
          />
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Price:</Text>
            <TextInput
              style={styles.textInput}
              value={lumberItemPrice}
              placeholder={'Lumber Item Price'}
              onChangeText={onChangeLumberItemPrice}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('lumberItemPrice', lumberItemPrice)}>
              <View>
                <Text style={styles.buttonText}>Set Price</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 80, color: textColor}}>
            Other
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openOtherItems}
            value={selectedOtherItem}
            items={otherItems.map(item => ({label: item, value: item}))}
            setOpen={setOpenOtherItems}
            setValue={setSelectedOtherItem}
          />
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Price:</Text>
            <TextInput
              style={styles.textInput}
              value={otherItemPrice}
              placeholder={'Other Item Price'}
              onChangeText={onChangeOtherItemPrice}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('otherItemPrice', otherItemPrice)}>
              <View>
                <Text style={styles.buttonText}>Set Price</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 18,
              marginTop: 60,
              marginBottom: 16,
              color: textColor,
            }}>
            Labor
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openLaborItems}
            value={selectedLaborItem}
            items={laborItems.map(item => ({label: item, value: item}))}
            setOpen={setOpenLaborItems}
            setValue={setSelectedLaborItem}
          />
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Price:</Text>
            <TextInput
              style={styles.textInput}
              value={laborPrice}
              placeholder={'Labor Price'}
              onChangeText={onChangeLaborItemPrice}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('laborItemPrice', laborPrice)}>
              <View>
                <Text style={styles.buttonText}>Set Price</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
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
    color: textColor,
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: textColor,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    paddingVertical: 0.8,
  },
  buttonText: {
    color: textColor,
  },
});

export default SettingsScreen;
