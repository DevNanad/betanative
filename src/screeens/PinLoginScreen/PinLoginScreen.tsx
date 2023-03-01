import { Image, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import OtpInputs from 'react-native-otp-inputs';

const PinLoginScreen = () => {
  const [pinCode, setPinCode] = useState('');
  const [tries, setTries] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';

  const pin = 1234;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}
    >
      <Text
        style={[styles.codeHeading, isDarkMode ? styles.codeHeadingDark : styles.codeHeadingLight]}
      >
        Enter your Pin Code
      </Text>

      <View>
        <Text style={styles.codeLabel}>Keep your Pin code a secret, never share it to anyone</Text>
        <OtpInputs
          autofillFromClipboard={false}
          handleChange={(code) => {
            if (code.length === 4) {
              setTimeout(() => {
                if (code === pin.toString()) {
                  console.warn('pin is correct');
                } else {
                  console.warn('Invalid pin');
                  setTries(tries + 1);
                }

                if (tries === 5) {
                  //navigate to locked
                  console.warn("You've used all your chances");
                }
              }, 500);
            }
          }}
          numberOfInputs={4}
          style={styles.inputContainer}
          inputStyles={[styles.input, isDarkMode ? styles.inputDark : styles.inputLight]}
        />
      </View>
    </ScrollView>
  );
};

export default PinLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 40,
  },
  containerDark: {
    backgroundColor: '#1b1c27',
  },
  containerLight: {
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  input: {
    backgroundColor: '#e8e8e8',
    textAlign: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
    color: '#1b1c27',
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputDark: {
    backgroundColor: '#31323C',
    color: '#ffffff',
  },
  inputLight: {
    backgroundColor: '#e8e8e8',
    color: '#1b1c27',
  },
  codeLabel: {
    color: 'gray',
    fontSize: 16,
    paddingVertical: 5,
    marginTop: 10,
  },
  codeHeading: {
    marginTop: 50,
    color: '#0081C9',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  codeHeadingDark: {
    color: '#ffffff',
  },
  codeHeadingLight: {
    color: '#0081C9',
  },
});
