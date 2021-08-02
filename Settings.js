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
  const [selectedLumberItem, setSelectedLumberItem] = useState(lumberItems[0]);
  const [lumberItemPrice, onChangeLumberItemPrice] = useState('');
  const [selectedOtherItem, setSelectedOtherItem] = useState(otherItems[0]);
  const [otherItemPrice, onChangeOtherItemPrice] = useState('');
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
          <Text style={{fontSize: 18}}>Select Materials</Text>
          <Text style={{fontSize: 18, marginTop: 16}}>Lumber</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedLumberItem}
            onValueChange={item => {
              setSelectedLumberItem(item);
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('lumberItemPrice', lumberItemPrice)}>
              <View>
                <Text style={styles.buttonText}>Set Price</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 20}}>Other</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedOtherItem}
            onValueChange={item => {
              setSelectedOtherItem(item);
            }}>
            {otherItems.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Price</Text>
            <TextInput
              style={{backgroundColor: '#fff'}}
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
          <Text style={{fontSize: 18, marginTop: 20, marginBottom: 16}}>
            Labor
          </Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedLaborItem}
            onValueChange={item => {
              setSelectedLaborItem(item);
            }}>
            {laborItems.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Price</Text>
            <TextInput
              style={{backgroundColor: '#fff'}}
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
