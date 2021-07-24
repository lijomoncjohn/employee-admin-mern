import React from 'react';
import FormGroup from '../../components/Form/FormGroup';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import CardBody from '../../components/UI/CardBody';

const Login = () => {
	return (
		<Card>
			<CardBody>
				<form>
					<FormGroup>
						<TextInput />
					</FormGroup>
					<FormGroup>
						<TextInput />
					</FormGroup>
				</form>
			</CardBody>
		</Card>
	);
};

export default Login;
