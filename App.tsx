import React from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import ChooseLogin from './src/screeens/ChooseLogin';
import ChooseRegister from './src/screeens/ChooseRegister';
import ForgotPasswordScreen from './src/screeens/ForgotPasswordScreen';
import IdLoginScreen from './src/screeens/IdLoginScreen';
import IdRegisterScreen from './src/screeens/IdRegisterScreen';
import LandingScreen from './src/screeens/LandingScreen';
import OtpScreen from './src/screeens/OtpScreen';
import PinLoginScreen from './src/screeens/PinLoginScreen';
import PinRegisterScreen from './src/screeens/PinRegisterScreen';
import QrLoginScreen from './src/screeens/QrLoginScreen/QrLoginScreen';
import QrRegisterScreen from './src/screeens/QrRegisterScreen/QrRegisterScreen';
import ResetPasswordScreen from './src/screeens/ResetPasswordScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[styles.root, isDarkMode ? styles.rootDark : styles.rootLight]}>
      <PinLoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  rootDark: {
    backgroundColor: '#1b1c27',
  },
  rootLight: {
    backgroundColor: '#fff',
  },
});

export default App;
