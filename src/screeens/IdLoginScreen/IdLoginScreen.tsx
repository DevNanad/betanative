import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import React, { useState } from 'react';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const IdLoginScreen = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onIdLoginPressed = () => {
    console.warn('Login using Id');
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot password');
  };
  const onRegisterPressed = () => {
    console.warn('Register');
  };
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* TCU Background Image */}
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../../assets/images/bg.png')}
      ></ImageBackground>
      {/* end Background Image */}

      <View style={[styles.login, isDarkMode ? styles.loginDark : styles.loginLight]}>
        {/* Login Heading start*/}
        <View style={styles.log}>
          <Text
            style={[styles.loginText, isDarkMode ? styles.loginTextDark : styles.loginTextLight]}
          >
            Login
          </Text>
        </View>
        {/* TCU Background Image */}

        {/* Login Form */}
        <View style={styles.inputForm}>
          <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
            Student ID
          </Text>
          <CustomInput placeholder="ex. 0123456" value={id} setValue={setId} keyType="numeric" />
          <Text style={[styles.label, isDarkMode ? styles.labelDark : styles.labelLight]}>
            Password
          </Text>
          <CustomInput
            placeholder="* * * * * *"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

          <CustomButton title="Login" onPress={onIdLoginPressed} type={'PRIMARY'} />

          <View style={styles.action}>
            <Text style={styles.actionChoice} onPress={onForgotPasswordPressed}>
              Forgot Password?
            </Text>
            <Text style={styles.actionChoice} onPress={onRegisterPressed}>
              Register
            </Text>
          </View>
        </View>
        {/* end Login Form */}
      </View>
    </ScrollView>
  );
};

export default IdLoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  ImageBackground: {
    height: Dimensions.get('window').height / 2.5,
  },
  login: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  loginDark: {
    backgroundColor: '#1b1c27',
  },
  loginLight: {
    backgroundColor: '#ffffff',
  },
  log: {
    padding: 20,
  },
  loginText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1b1c27',
    textAlign: 'center',
    letterSpacing: 5,
  },
  loginTextDark: {
    color: '#ffffff',
  },
  loginTextLight: {
    color: '#1b1c27',
  },
  inputForm: {
    paddingHorizontal: 20,
  },
  label: {
    color: 'gray',
    letterSpacing: 1,
  },
  labelDark: {
    color: '#e1e1e1',
  },
  labelLight: {
    color: 'gray',
  },

  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionChoice: {
    paddingVertical: 5,
    color: '#0081C9',
    textDecorationLine: 'underline',
  },
});
