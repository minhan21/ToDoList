import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      {props.headerLeft && props.headerLeft()}
      <Text style={styles.titleHeader}>{props.title}</Text>
      {props.headerRight && props.headerRight()}
      {props.onSaveData && props.onSaveData()}
    </View>
  );
};

export default Header;
