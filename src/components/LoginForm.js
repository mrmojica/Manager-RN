import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
		console.log('email1', this);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		console.log('email', this.props.email);

		//expecting object to be passed in loginUser
		this.props.loginUser({ email, password });
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
				</CardSection>
			</Card>
		)
	}

}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = ({ auth })  => {
 const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};
//connect( null || mapState..., { actions })(Component class)
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);