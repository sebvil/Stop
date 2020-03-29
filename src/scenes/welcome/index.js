import React, {Component} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import styles from '_scenes/styles';
import ActionButton from '../../components/atoms/ActionButton';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <ActionButton title={'Empezar Juego!'} />
      </SafeAreaView>
    );
  }
}
