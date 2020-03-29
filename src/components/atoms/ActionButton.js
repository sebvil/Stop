import React from 'react';
import {Button, View} from 'react-native';
import {Colors} from '_styles';

const ActionButton = ({title, onPress}) => (
  <View>
    <Button title={title} onPress={onPress} color={Colors.PRIMARY} />
  </View>
);

export default ActionButton;
