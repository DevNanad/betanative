import { Image, ScrollView, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';

const PinRegisterScreen = () => {
  const [pinCode, setPinCode] = useState('');
  const [confirmPincode, setConfirmPincode] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onConfirmPressed = () => {
    if (pinCode !== confirmPincode) {
      console.warn("Pin doens't match");
    } else {
      console.warn('Pin confirmed', pinCode, confirmPincode);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}
    >
      <Text
        style={[styles.codeHeading, isDarkMode ? styles.codeHeadingDark : styles.codeHeadingLight]}
      >
        Create your PIN code
      </Text>

      <Text
        style={[
          styles.codeSubheading,
          isDarkMode ? styles.codeSubheadingDark : styles.codeSubheadingLight,
        ]}
      >
        Protect your account from unauthorized access with a PIN
      </Text>

      <View>
        <View style={styles.inputContainer}>
          <View style={[styles.containerInput]}>
            <TextInput
              value={pinCode}
              keyboardType="numeric"
              maxLength={4}
              onChangeText={(pin) => setPinCode(pin)}
              placeholder={'PIN code'}
              placeholderTextColor={'gray'}
              style={[styles.input, isDarkMode ? styles.inputDark : styles.inputLight]}
            />
            <TextInput
              value={confirmPincode}
              keyboardType="numeric"
              maxLength={4}
              onChangeText={(pin) => setConfirmPincode(pin)}
              placeholder={'Confirm PIN code'}
              placeholderTextColor={'gray'}
              style={[styles.input, isDarkMode ? styles.inputDark : styles.inputLight]}
            />
          </View>
        </View>

        <CustomButton title="Confirm" onPress={onConfirmPressed} type={'PRIMARY'} />
      </View>
    </ScrollView>
  );
};

export default PinRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    gap: 10,
  },
  containerDark: {
    backgroundColor: '#1b1c27',
  },
  containerLight: {
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    marginTop: 10,
  },
  codeHeading: {
    color: '#0081C9',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  codeHeadingDark: {
    color: '#ffffff',
  },
  codeHeadingLight: {
    color: '#0081C9',
  },
  codeSubheading: {
    color: 'dimgray',
    paddingVertical: 10,
    fontSize: 15,
  },
  codeSubheadingDark: {
    color: '#e8e8e8',
    fontWeight: '500',
  },
  codeSubheadingLight: {
    color: 'dimgray',
  },
  input: {
    color: '#1b1c27',
    backgroundColor: '#e8e8e8',
    borderRadius: 100,
    fontSize: 20,
    paddingVertical: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputDark: {
    color: 'white',
    backgroundColor: '#31323C',
  },
  containerInput: {
    width: '100%',
    gap: 10,
    marginVertical: 30,
  },

  inputLight: {
    color: '#1b1c27',
    backgroundColor: '#e8e8e8',
  },
});
