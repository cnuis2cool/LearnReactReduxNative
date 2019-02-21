import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

import {createStackNavigator, createAppContainer} from "react-navigation";


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')} />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go to Details</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Details'
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:  HomeScreen,
  Details: DetailsScreen
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return(
      <AppContainer />
    );
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

