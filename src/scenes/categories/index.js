import React, {Component} from 'react';
import {
  ActivityIndicator,
  default as Alert,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {Colors} from '_styles';
import {Grid, Col} from 'react-native-easy-grid';
import styles from '_scenes/styles';
import ActionButton from '_components/atoms/ActionButton';
import {generateCategories} from '_utils/generateCategories';
import Timer from '_components/atoms/Timer';
import {TIME, LETTERS} from '_assets/constants';
import GridRow from '_components/atoms/GridRow';
import Dialog from 'react-native-dialog';
import {ALERT} from '../../styles/colors';

export default class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimeSet: false,
      timerStart: false,
      timerReset: false,
      categories: [],
      loading: true,
      currentLetter: '-',
      time: 0,
      letters: LETTERS,
      buttonDisabled: false,
    };
  }

  componentDidMount = async () => {
    await generateCategories().then(
      (res) => {
        this.setState({categories: res, loading: false});
      },
      (e) => {
        console.log(e);
      },
    );
  };

  handleTimerComplete = () => {
    if (this.state.letters.length > 0) {
      this.setState({
        timerStart: false,
        timerReset: false,
        time: TIME,
        buttonDisabled: false,
      });
    } else {
      this.setState({
        timerStart: false,
        timerReset: false,
        time: TIME,
        currentLetter: 'No hay más letras!',
      });
    }
  };
  onSubmit = () => {
    const time = Number(this.state.time);
    if (Number.isNaN(time)) {
      Alert.alert(
        'Número inválido',
        'Asegúrate de que escribiste bien el número',
      );
    } else if (time <= 0) {
      Alert.alert('Número inválido', 'El tiempo debe ser mayor que 0');
    }
    this.setState({time: time * 1000, isTimeSet: true});

  };
  onPress = () => {
    const index = Math.floor(Math.random() * this.state.letters.length);
    const letter = this.state.letters[index];
    const letters = this.state.letters.replace(letter, '');
    this.setState({timerReset: true}, () => {
      this.setState({
        timerStart: true,
        currentLetter: letter,
        letters: letters,
        buttonDisabled: true,
      });
    });
  };
  render() {
    if (!this.state.isTimeSet) {
      return (
        <Dialog.Container visible={!this.state.isTimeSet}>
          <Dialog.Title>Tiempo por letra</Dialog.Title>
          <Dialog.Description>
            ¿Cuántos segundos quieres por letra?
          </Dialog.Description>
          <Dialog.Input
            keyboardType={'numeric'}
            onChangeText={(text) => {
              this.setState({time: text});
            }}
            underlineColorAndroid={Colors.BLACK}
          />
          <Dialog.Button label="Submit" onPress={this.onSubmit} />
          <Dialog.Button
            label="Cancelar"
            onPress={() => {
              this.props.navigation.pop();
            }}
          />
        </Dialog.Container>
      );
    }
    if (this.state.loading) {
      return (
        <SafeAreaView style={styles.root}>
          <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
        </SafeAreaView>
      );
    }
    console.log(this.state.buttonDisabled);
    return (
      <SafeAreaView style={styles.root}>
        <ScrollView>
          <Grid>
            <Col>
              <GridRow height={100}>
                <Text style={styles.title}>Categorias</Text>
              </GridRow>
              {this.state.categories.map((prop, key) => {
                return (
                  <GridRow key={key} height={50}>
                    <Text style={styles.categories}>{prop}</Text>
                  </GridRow>
                );
              })}
              <GridRow height={50}>
                <Text style={styles.title}>{this.state.currentLetter}</Text>
              </GridRow>
              <GridRow height={50}>
                <Timer
                  totalDuration={this.state.time}
                  msecs
                  start={this.state.timerStart}
                  reset={this.state.timerReset}
                  options={options}
                  handleFinish={this.handleTimerComplete}
                  getTime={null}
                />
              </GridRow>
              <GridRow height={50}>
                <ActionButton
                  title={'Generar letra!'}
                  disabled={this.state.buttonDisabled}
                  onPress={this.onPress}
                />
              </GridRow>
            </Col>
          </Grid>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    color: '#000',
    marginLeft: 7,
  },
};
