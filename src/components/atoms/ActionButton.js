import React from 'react';
import {Button, View} from 'react-native';
import {Colors} from '_styles';
import styles from './styles';

const ActionButton = ({title, onPress, disabled}) => {
  console.log('DISABLED:', disabled);
  return (
    <View style={styles.button}>
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        color={Colors.PRIMARY}
      />
    </View>
  );
};

export default ActionButton;
