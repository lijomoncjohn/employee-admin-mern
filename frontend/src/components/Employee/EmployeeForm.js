import { Formik } from 'formik';
import React from 'react';
import ErrorText from '../Form/ErrorText';
import FormGroup from '../Form/FormGroup';
import FormRow from '../Form/FormRow';
import TextInput from '../Form/TextInput';
import Button from '../UI/Button/Button';

const EmployeeForm = (props, { handleClose, handleEdit }) => {
	const {
		employeeId = '',
		name = '',
		email = '',
		mobile = '',
		age = '',
		address = '',
		_id = '',
	} = props.editValues;

	return (
		<Formik
			initialValues={{
				employeeId,
				name,
				email,
				mobile,
				age,
				address,
			}}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Please enter valid email';
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = 'Invalid email address';
				}
				if (!values.employeeId) {
					errors.employeeId = 'Please enter an Employee ID';
				}
				if (!values.name) {
					errors.name = 'Please enter an Name';
				}
				if (!values.mobile) {
					errors.mobile = 'Please enter a Mobile No.';
				}
				if (!values.address) {
					errors.address = 'Please enter Address.';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				if (_id) {
					props.handleUpdate(values, { setSubmitting });
				} else {
					props.handleSubmit(values, { setSubmitting });
				}
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
					<FormRow>
						<FormGroup className='col-md-6'>
							<label for='TextInputEmail4'>Employee ID</label>
							<TextInput
								name='employeeId'
								type='text'
								className='form-control'
								id='TextInputEmail4'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.employeeId}
							/>
							{errors.employeeId && touched.employeeId && (
								<ErrorText error={errors.employeeId} />
							)}
						</FormGroup>
						<FormGroup className=' col-md-6'>
							<label for='TextInputPassword4'>Full name</label>
							<TextInput
								name='name'
								type='text'
								className='form-control'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
							{errors.name && touched.name && <ErrorText error={errors.name} />}
						</FormGroup>
					</FormRow>
					<FormGroup>
						<label for='TextInputAddress'>Address</label>
						<TextInput
							name='address'
							type='text'
							className='form-control'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.address}
						/>
						{errors.address && touched.address && (
							<ErrorText error={errors.address} />
						)}
					</FormGroup>
					<FormRow>
						<FormGroup className='col-md-5'>
							<label for='TextInputCity'>Email</label>
							<TextInput
								name='email'
								type='email'
								className='form-control'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && <ErrorText error={errors.email} />}
						</FormGroup>
						<FormGroup className='col-md-5'>
							<label for='TextInputState'>Mobile</label>
							<TextInput
								name='mobile'
								type='phone'
								className='form-control'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.mobile}
							/>
							{errors.mobile && touched.mobile && <ErrorText error={errors.mobile} />}
						</FormGroup>
						<FormGroup className='col-md-2'>
							<label for='TextInputZip'>Age</label>
							<TextInput
								name='age'
								type='text'
								className='form-control'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.age}
							/>
						</FormGroup>
					</FormRow>
					<Button className='btn-success' title='Submit' type='submit' />
				</form>
			)}
		</Formik>
	);
};

export default EmployeeForm;
