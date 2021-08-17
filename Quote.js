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

const fenceSides = ['Left', 'Back', 'Right', 'Front Right', 'Front Left'];
const numOfGates = ['1 Gate', '2 Gates', '3 Gates'];
const numOfStringers = ['1 Stringer', '2 Stringers'];
const fenceHeight = ['6 ft.', '8 ft.'];
const picketWidth = ['4 in.', '6 in.'];
const lumberType = ['Cedar', 'Pine'];
const postType = ['Wood', 'Steel'];

const QuoteScreen = () => {
  const [openFenceSides, setOpenFenceSides] = useState(false);
  const [selectedFenceSide, setSelectedFenceSide] = useState(fenceSides[0]);
  const [fenceSideLength, onChangeFenceSideLength] = useState('');
  const [openGateNums, setOpenGateNums] = useState(false);
  const [selectedGateNum, setSelectedGateNum] = useState(numOfGates[0]);
  const [openStringerNums, setOpenStringerNums] = useState(false);
  const [selectedStringerNums, setSelectedStringerNums] = useState(
    numOfStringers[0],
  );
  const [openFenceHeight, setOpenFenceHeight] = useState(false);
  const [selectedFenceHeight, setSelectedFenceHeight] = useState(
    fenceHeight[0],
  );
  const [openPicketWidth, setOpenPicketWidth] = useState(false);
  const [selectedPicketWidth, setSelectedPicketWidth] = useState(
    picketWidth[0],
  );
  const [openLumberType, setOpenLumberType] = useState(false);
  const [selectedLumberType, setSelectedLumberType] = useState(lumberType[0]);
  const [openPostType, setOpenPostType] = useState(false);
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
          <Text style={{fontSize: 18, color: mainColor}}>
            Select Attributes
          </Text>
          <Text style={{fontSize: 18, marginTop: 16, color: textColor}}>
            Side Lengths
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openFenceSides}
            value={selectedFenceSide}
            items={fenceSides.map(item => ({label: item, value: item}))}
            setOpen={setOpenFenceSides}
            setValue={setSelectedFenceSide}
          />
          <View style={styles.priceArea}>
            <Text style={styles.priceChars}>Length:</Text>
            <TextInput
              style={styles.textInput}
              value={fenceSideLength}
              placeholder={'Fence Side Length'}
              onChangeText={onChangeFenceSideLength}
            />
            <Text style={{color: textColor}}>ft.</Text>
            <TouchableOpacity
              style={styles.fenceButton}
              onPress={() => save('fenceSideLength', fenceSideLength)}>
              <View>
                <Text style={styles.buttonText}>Set Length</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, marginTop: 70, color: textColor}}>
            Number of Gates
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openGateNums}
            value={selectedGateNum}
            items={numOfGates.map(item => ({label: item, value: item}))}
            setOpen={setOpenGateNums}
            setValue={setSelectedGateNum}
          />
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
          <Text style={{fontSize: 18, marginTop: 16, color: textColor}}>
            Number of Stringers
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openStringerNums}
            value={selectedStringerNums}
            items={numOfStringers.map(item => ({label: item, value: item}))}
            setOpen={setOpenStringerNums}
            setValue={setSelectedStringerNums}
          />
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
          <Text style={{fontSize: 18, marginTop: 16, color: textColor}}>
            Fence Height
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openFenceHeight}
            value={selectedFenceHeight}
            items={fenceHeight.map(item => ({label: item, value: item}))}
            setOpen={setOpenFenceHeight}
            setValue={setSelectedFenceHeight}
          />
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
          <Text style={{fontSize: 18, marginTop: 16, color: textColor}}>
            Picket Width
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openPicketWidth}
            value={selectedPicketWidth}
            items={picketWidth.map(item => ({label: item, value: item}))}
            setOpen={setOpenPicketWidth}
            setValue={setSelectedPicketWidth}
          />
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
          <Text style={{fontSize: 18, marginTop: 16, color: textColor}}>
            Lumber Type
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openLumberType}
            value={selectedLumberType}
            items={lumberType.map(item => ({label: item, value: item}))}
            setOpen={setOpenLumberType}
            setValue={setSelectedLumberType}
          />
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
          <Text style={{fontSize: 18, marginTop: 16, color: textColor}}>
            Post Type
          </Text>
          <DropDownPicker
            style={{
              marginVertical: 32,
              backgroundColor: backgroundColor,
              borderColor: textColor,
            }}
            textStyle={{color: textColor}}
            open={openPostType}
            value={selectedPostType}
            items={postType.map(item => ({label: item, value: item}))}
            setOpen={setOpenPostType}
            setValue={setSelectedPostType}
          />
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
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: textColor,
    borderRadius: 10,
    marginVertical: 16,
  },
  fenceButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: textColor,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    marginRight: 10,
    paddingHorizontal: 4,
    paddingVertical: 0.8,
  },
  buttonText: {
    color: textColor,
  },
});

export default QuoteScreen;
