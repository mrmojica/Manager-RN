import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		//name phone shift / value
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	//get current user
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        //type reset removes the back button that would originally pop up in the header
        Actions.employeeList({ type: 'reset' });
      });
  };

};