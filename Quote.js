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

const fenceSides = ['Left', 'Back', 'Right', 'Front Right', 'Front Left'];
const numOfGates = ['1 Gate', '2 Gates', '3 Gates'];
const numOfStringers = ['1 Stringer', '2 Stringers'];
const fenceHeight = ['6 ft.', '8 ft.'];
const picketWidth = ['4 in.', '6 in.'];
const lumberType = ['Cedar', 'Pine'];
const postType = ['Wood', 'Steel'];

const QuoteScreen = () => {
  const [selectedFenceSide, setSelectedFenceSide] = useState(fenceSides[0]);
  const [fenceSideLength, onChangeFenceSideLength] = useState('');
  const [selectedGateNum, setSelectedGateNum] = useState(numOfGates[0]);
  const [selectedStringerNums, setSelectedStringerNums] = useState(
    numOfStringers[0],
  );
  const [selectedFenceHeight, setSelectedFenceHeight] = useState(
    fenceHeight[0],
  );
  const [selectedPicketWidth, setSelectedPicketWidth] = useState(
    picketWidth[0],
  );
  const [selectedLumberType, setSelectedLumberType] = useState(lumberType[0]);
  const [selectedPostType, setSelectedPostType] = useState(postType[0]);
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
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{alignSelf: 'stretch', alignItems: 'center', marginTop: 16}}>
          <Text style={{fontSize: 18}}>Select Attributes</Text>
          <Text style={{fontSize: 18, marginTop: 16}}>Side Lengths</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedFenceSide}
            onValueChange={item => {
              setSelectedFenceSide(item);
            }}>
            {fenceSides.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Length:</Text>
            <TextInput
              style={styles.textInput}
              value={fenceSideLength}
              placeholder={'Fence Side Length'}
              onChangeText={onChangeFenceSideLength}
            />
            <Text>ft.</Text>
            <TouchableOpacity
              style={styles.fenceButton}
              onPress={() => save('fenceSideLength', fenceSideLength)}>
              <View>
                <Text style={styles.buttonText}>Set Length</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 16}}>Number of Gates</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedGateNum}
            onValueChange={item => {
              setSelectedGateNum(item);
            }}>
            {numOfGates.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Gates:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('selectedGateNum', selectedGateNum)}>
              <View>
                <Text style={styles.buttonText}>Set Number</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 16}}>Number of Stringers</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedStringerNums}
            onValueChange={item => {
              setSelectedStringerNums(item);
            }}>
            {numOfStringers.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Stringers:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                save('selectedStringerNums', selectedStringerNums)
              }>
              <View>
                <Text style={styles.buttonText}>Set Number</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 16}}>Fence Height</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedFenceHeight}
            onValueChange={item => {
              setSelectedFenceHeight(item);
            }}>
            {fenceHeight.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Height:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('selectedFenceHeight', selectedFenceHeight)}>
              <View>
                <Text style={styles.buttonText}>Set Number</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 16}}>Picket Width</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedPicketWidth}
            onValueChange={item => {
              setSelectedPicketWidth(item);
            }}>
            {picketWidth.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Width:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('selectedPicketWidth', selectedPicketWidth)}>
              <View>
                <Text style={styles.buttonText}>Set Width</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 16}}>Lumber Type</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedLumberType}
            onValueChange={item => {
              setSelectedLumberType(item);
            }}>
            {lumberType.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Type:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('selectedLumberType', selectedLumberType)}>
              <View>
                <Text style={styles.buttonText}>Set Type</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 16}}>Post Type</Text>
          <Picker
            style={{alignSelf: 'stretch'}}
            selectedValue={selectedPostType}
            onValueChange={item => {
              setSelectedPostType(item);
            }}>
            {postType.map(item => (
              <Picker.Item label={item} value={item} key={item} />
            ))}
          </Picker>
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Type:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => save('selectedPostType', selectedPostType)}>
              <View>
                <Text style={styles.buttonText}>Set Type</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginVertical: 16,
  },
  fenceButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    marginRight: 10,
    paddingHorizontal: 4,
    paddingVertical: 0.8,
  },
});

export default QuoteScreen;
