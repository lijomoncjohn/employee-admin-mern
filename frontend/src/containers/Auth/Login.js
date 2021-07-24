import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import FormGroup from '../../components/Form/FormGroup';
import FormLabel from '../../components/Form/FormLabel';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import CardBody from '../../components/UI/CardBody';
import CardHeader from '../../components/UI/CardHeader';

import './Login.css';
import ErrorText from '../../components/Form/ErrorText';

const Login = () => {
	const handleLogin = (values, { setSubmitting }) => {
		console.log(JSON.stringify(values));
	};

	return (
		<div className='section-login'>
			<Card classNames='card-login'>
				<CardHeader>
					<h5 className='font-weight-bold'>Log In</h5>
				</CardHeader>
				<CardBody>
					<Formik
						initialValues={{ email: '', password: '' }}
						validate={(values) => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Please enter valid email';
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = 'Invalid email address';
							}
							if (!values.password) {
								errors.password = 'Please enter password';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							handleLogin(values, { setSubmitting });
						}}>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
						}) => (
							<form onSubmit={handleSubmit}>
								<FormGroup>
									<FormLabel label='Email address' />
									<TextInput type='email' name='email' />
									{errors.email && touched.email && <ErrorText error={errors.email} />}
								</FormGroup>
								<FormGroup>
									<FormLabel label='Password' />
									<TextInput type='password' name='password' />
									{errors.password && touched.password && (
										<ErrorText error={errors.password} />
									)}
								</FormGroup>
								<div class='d-flex justify-content-between'>
									<Link to='/forgot' className='mt-2'>
										Forgot password?
									</Link>
									<Button
										type='submit'
										classNames='btn-primary btn-success px-3'
										title='Login'
									/>
								</div>
							</form>
						)}
					</Formik>
				</CardBody>
			</Card>
		</div>
	);
};

export default Login;
