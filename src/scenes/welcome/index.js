import React, {Component} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import styles from '_scenes/styles';
import ActionButton from '_components/atoms/ActionButton';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.navigation.navigate('Categories');
  }
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <ActionButton title={'Empezr Juego!'} onPress={this.onPress} />
      </SafeAreaView>
    );
  }
}
