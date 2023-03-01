import { Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import React from 'react';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  type: string;
};

const CustomButton = ({ onPress, title, type = 'PRIMARY' }: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`bg_${type}`]]}>
      <Text style={[styles[`text_${type}`]]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 7,
    alignItems: 'center',
    borderRadius: 8,
  },
  bg_PRIMARY: {
    backgroundColor: '#0081C9',
  },
  bg_SECONDARY: {
    backgroundColor: '#ECF9FF',
  },
  text_PRIMARY: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
  text_SECONDARY: {
    color: '#0081C9',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default CustomButton;
