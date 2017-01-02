import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
		//wire up redux-thunk
		const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
			);
	}
}

export default App;
