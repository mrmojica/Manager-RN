import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
	return (
		//you can add the initial attribute to the Scene to set which component displays first
		//by only have one child scene it there will not be a arrow displaying on the header
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>

			<Scene key="main">
				<Scene key="employeeList" component={EmployeeList} title="Employees" />
			</Scene>
		</Router>
	);
};


export default RouterComponent;