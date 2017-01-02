import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		playload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		playload: text
	};
};

//added curly brackets because expect and object with email and password property on it
export const loginUser = ({email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
	//this call makes a request to firebase servers
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch((error) => {
			console.log(error);
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then( user => loginUserSuccess(dispatch, user))
				.catch(() => loginUserFail(dispatch));
		})
	};
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
