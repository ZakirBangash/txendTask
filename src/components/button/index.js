import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {AppPrimary, PrimaryWhite} from '../../constants/colors';

const Button = ({label, onPress, buttonStyle}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        buttonStyle,
        {opacity: pressed ? 0.5 : 1},
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '30%',
    padding: 8,
    backgroundColor: AppPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: PrimaryWhite,
  },
});

export default Button;
