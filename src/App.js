import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
	componentWillMount() {
	//make sure firebase only runs one time
	const config = {
    apiKey: 'AIzaSyD7RvDR6I9vAg30eqNc_m-n9wo-ESKSAbg',
    authDomain: 'manager-9c9ae.firebaseapp.com',
    databaseURL: 'https://manager-9c9ae.firebaseio.com',
    storageBucket: 'manager-9c9ae.appspot.com',
    messagingSenderId: '182488237809'
  };
  
  firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
					Hello!
					</Text>
				</View>
			</Provider>
			);
	}
}

export default App;
