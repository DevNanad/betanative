import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = () => {
  const [Pnumber, setPnumber] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const onSubmitPressed = () => {
    console.warn('Submitted');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View
        style={[styles.forgotRoot, isDarkMode ? styles.forgotRootDark : styles.forgotRootLight]}
      >
        {/* Key Icon */}
        <View style={styles.iconRoot}>
          <View style={styles.iconBg}>
            <MaterialCommunityIcons name="key" size={70} color="#0081C9" />
          </View>
        </View>
        {/* End Key Icon */}

        <View style={styles.formRoot}>
          <Text style={[styles.infoText, isDarkMode ? styles.infoTextDark : styles.infoTextLight]}>
            Provide the details below to begin the process
          </Text>

          <Text style={styles.labelText}>Enter Mobile Number</Text>
          <CustomInput
            placeholder="ex. 09123456789"
            value={Pnumber}
            setValue={setPnumber}
            keyType="numeric"
          />
        </View>

        <CustomButton title={'Send OTP'} onPress={onSubmitPressed} type={'PRIMARY'} />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  forgotRoot: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  forgotRootDark: {
    backgroundColor: '#1b1c27',
  },
  forgotRootLight: {
    backgroundColor: '#ffffff',
  },
  iconRoot: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },

  iconBg: {
    padding: 18,
    backgroundColor: '#EDEEF2',
    borderRadius: 100,
  },
  formRoot: {
    paddingVertical: 10,
    marginBottom: 30,
  },
  infoText: {
    paddingBottom: 20,
    fontSize: 16,
    fontWeight: '500',
    color: '#1b1c27',
  },
  infoTextDark: {
    color: '#ffffff',
  },
  infoTextLight: {
    color: '#1b1c27',
  },
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    color: 'gray',
  },
});
