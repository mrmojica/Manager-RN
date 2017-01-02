import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
	
	switch (action.type) {
		case EMAIL_CHANGED:
			console.log('action email changed!');
			// return new object - ...state takes all the properties from existing object and puts it into the object and overwrite with email property.
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			console.log('action password changed!');
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' }
		case LOGIN_USER_SUCCESS:
			//set state back to initial state then add user state
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading: false };
		default:
			return state;

	}
};
