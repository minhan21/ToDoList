import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = ({title, disabled, onPress}, ...props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.buttonContainer, disabled && styles.disableButton]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
