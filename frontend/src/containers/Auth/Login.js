import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import FormGroup from '../../components/Form/FormGroup';
import FormLabel from '../../components/Form/FormLabel';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import CardBody from '../../components/UI/Card/CardBody';
import CardHeader from '../../components/UI/Card/CardHeader';

import './Login.css';
import ErrorText from '../../components/Form/ErrorText';
import { AuthAction } from '../../core/entities/auth/action';
import { AuthContext } from '../../core/context/authContext';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const auth = useContext(AuthContext);

	const login = useSelector((state) => state.auth.login);

	useEffect(() => {
		if (login !== undefined && login.success) {
			auth.login(login.data.token, login.data.userId);
			history.push('/dashboard');
		}
	}, [dispatch, login]);

	const handleLogin = (values, { setSubmitting }) => {
		dispatch(AuthAction.login(values));
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
									<TextInput
										type='email'
										name='email'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
									/>
									{errors.email && touched.email && <ErrorText error={errors.email} />}
								</FormGroup>
								<FormGroup>
									<FormLabel label='Password' />
									<TextInput
										type='password'
										name='password'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
									/>
									{errors.password && touched.password && (
										<ErrorText error={errors.password} />
									)}
								</FormGroup>
								<div className='d-flex justify-content-between'>
									<Link to='/forgot' className='mt-2'>
										Forgot password?
									</Link>
									<Button classNames='btn-primary btn-success px-3' title='Login' />
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
