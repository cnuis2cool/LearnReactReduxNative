import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView, Image, Picker } from 'react-native';

import {createStackNavigator, createAppContainer} from "react-navigation";

class Busy extends Component {
  render() {
    return (<Image source={require('./assets/loader.gif')} style={{width: 40, height: 40}} />);
  }
}

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {questions: [], busy: false};
  }

  static navigationOptions = {
    title: 'Home'
  }


  render() {
    const {questions, busy} = this.state;
    const {navigation} = this.props;

    if (busy) {
      ui = <Busy />
    }
    else {
      //ui = <ListView items={questions} navigation={navigation} displayText="statement" />
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="2018" value="2018" />
          <Picker.Item label="2019" value="2019" />
        </Picker>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:  HomeScreen,
  //Details: DetailsScreen
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

/**************** End of App 3  *****************/

// // App 2 - Display Questions and Radio buttons - Not completed
// import React, {Component} from 'react';
// import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView, Image } from 'react-native';

// import {createStackNavigator, createAppContainer} from "react-navigation";

// class Busy extends Component {
//   render() {
//     return (<Image source={require('./assets/loader.gif')} style={{width: 40, height: 40}} />);
//   }
// }

// class ListView extends Component {
//   render() {
//     const {items, navigation, displayText} = this.props;
//     return(
//       <ScrollView>
//         {items.map(item => (
//           <TouchableHighlight key={item.statement}  underlayColor="white">
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>Go to Details - {item[displayText]}</Text>
//               {/* <ToggleButton text="" /> */}
//             </View>
 
//           </TouchableHighlight>
//         ))}
//       </ScrollView>
//     );
//   }
// }

// class HomeScreen extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {questions: [], busy: false};
//   }

//   static navigationOptions = {
//     title: 'Home'
//   }

//   onSuccess = (data) => {
//     //alert('data');
//     this.setState({questions: data, busy: false});
//   }

//   onFailure = () => {}

//   getDataFromServer = () => {
//     fetch("http://131.163.209.64:3050/questions", {
//       method: 'GET',
//       headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
//     })
//     .then(response => response.json())
//     .then(this.onSuccess)
//     .catch(this.onFailure);

//     this.setState({busy: true});
//   }


//   render() {
//     const {questions, busy} = this.state;
//     const {navigation} = this.props;

//     if (busy) {
//       //ui = this.getImage();
//       ui = <Busy />
//     }
//     else {
//       //ui = this.getScrollView(customers, navigation);
  
//       ui = <ListView items={questions} navigation={navigation} displayText="statement" />
//     }

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
//         <Text>Home Screen</Text>
//         <Button title="DataFrom Server" onPress={this.getDataFromServer} />
//         {/* <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')} /> */}
//         {ui}
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home:  HomeScreen,
//   //Details: DetailsScreen
// },
// {
//   initialRouteName: "Home"
// });

// const AppContainer = createAppContainer(AppNavigator);

// class App extends Component {
//   render() {
//     return(
//       <AppContainer />
//     );
//   }
// }

// export default App;


// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// });

// /**************** End of App 2  *****************/


// // App 1 - Navigation
// import React, {Component} from 'react';
// import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView, Image } from 'react-native';

// import {createStackNavigator, createAppContainer} from "react-navigation";

// class Busy extends Component {
//   render() {
//     return (<Image source={require('./assets/loader.gif')} style={{width: 40, height: 40}} />);
//   }
// }

// // class ListView extends Component {
// //   render() {
// //     const {customers, navigation} = this.props;
// //     return(
// //       <ScrollView>
// //       {customers.map(customer => (
// //         <TouchableHighlight key={customer.id} onPress={() => navigation.navigate('Details', customer)} underlayColor="white">
// //           <View style={styles.button}>
// //             <Text style={styles.buttonText}>Go to Details - {customer.id}</Text>
// //           </View>
// //         </TouchableHighlight>
// //       ))}
// //     </ScrollView>
// //     );
// //   }
// // }

// class ListView extends Component {
//   render() {
//     const {items, navigation, displayText} = this.props;
//     return(
//       <ScrollView>
//         {items.map(item => (
//           <TouchableHighlight key={item.id} onPress={() => navigation.navigate('Details', item)} underlayColor="white">
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>Go to Details - {item[displayText]}</Text>
//             </View>
//           </TouchableHighlight>
//         ))}
//       </ScrollView>
//     );
//   }
// }

// class HomeScreen extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {customers: [], busy: false};
//   }

//   static navigationOptions = {
//     title: 'Home'
//   }

//   onSuccess = (data) => {
//     //alert('data');
//     this.setState({customers: data.movies, busy: false});
//   }

//   onFailure = () => {}

//   getDataFromServer = () => {
//     fetch("https://facebook.github.io/react-native/movies.json", {
//     //fetch("http://127.0.0.1:3050/customers", {
//       method: 'GET',
//       headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
//     })
//     .then(response => response.json())
//     .then(this.onSuccess)
//     .catch(this.onFailure);

//     this.setState({busy: true});
//   }

//   // getImage() {
//   //   return <Image source={require('./assets/loader.gif')} style={{width: 40, height: 40}} />
//   // }

//   // getScrollView(customers, navigation) {
//   //   return <ScrollView>
//   //   {customers.map(customer => (
//   //     <TouchableHighlight key={customer.id} onPress={() => navigation.navigate('Details', customer)} underlayColor="white">
//   //       <View style={styles.button}>
//   //         <Text style={styles.buttonText}>Go to Details - {customer.id}</Text>
//   //       </View>
//   //     </TouchableHighlight>
//   //   ))}
//   // </ScrollView>
//   // }

//   render() {
//     const {customers, busy} = this.state;
//     const {navigation} = this.props;

//     if (busy) {
//       //ui = this.getImage();
//       ui = <Busy />
//     }
//     else {
//       //ui = this.getScrollView(customers, navigation);
//       ui = <ListView items={customers} navigation={navigation} displayText="name" />
//     }

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
//         <Text>Home Screen</Text>
//         <Button title="DataFrom Server" onPress={this.getDataFromServer} />
//         {/* <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')} /> */}
//         {ui}
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {

//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam('name', 'Details Screen'),
//     };
//   };

//   render() {

//     const {navigation} = this.props;

//     const id = navigation.getParam('id', 0);
//     const name = navigation.getParam('name', 0);
//     const title = navigation.getParam('title', 0);
//     const year = navigation.getParam('releaseYear', 0);

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details Screen - {id} - {title} - {year}</Text>
//         <Button title="Back" onPress={() => navigation.goBack()} />
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home:  HomeScreen,
//   Details: DetailsScreen
// },
// {
//   initialRouteName: "Home"
// });

// const AppContainer = createAppContainer(AppNavigator);

// class App extends Component {
//   render() {
//     return(
//       <AppContainer />
//     );
//   }
// }

// export default App;


// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// });

