import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
// import Bodytext from './src/elements/BodyText' 
import firebase from 'firebase';
import SignupScreen from './src/screens/SignupScreen'
import Appbar from './src/components/Appbar'
import {createAppContainer, createStackNavigator} from 'react-navigation'
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';

import ENV from './env.json'
require("firebase/firestore");

var config = {
  apiKey:            ENV.FIREBASE_API_KEY,
  authDomain:        ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:       ENV.FIREBASE_DB_URL,
  projectId:         ENV.FIREBASE_PRJ_ID,
  storageBucket:     ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};

firebase.initializeApp(config)


// export default class App extends React.Component {
//   render() {
//     return (
//         <View style={styles.container}>
//           <Appbar/> 
//           <SignupScreen/>
//        </View>
//     );
//   }
// }


const App = createStackNavigator({
  Login: { screen: LoginScreen},
  Signup: { screen: SignupScreen},
  Home: { screen: MemoListScreen},
  MemoDetail: { screen: MemoDetailScreen},
  MemoEdit: { screen: MemoEditScreen},
  MemoCreate: { screen: MemoCreateScreen},
},{
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
     backgroudColor: '#265366'
    },
    headerStyle: {
      color: '#fff'
    },
  },  
});
 
export default createAppContainer(App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 78,
//   }
// });
