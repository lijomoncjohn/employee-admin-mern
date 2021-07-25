import React from 'react';
import FormGroup from '../Form/FormGroup';
import FormRow from '../Form/FormRow';

const EmployeeForm = () => {
	return (
		<form>
			<FormRow>
				<FormGroup className='col-md-6'>
					<label for='inputEmail4'>Employee ID</label>
					<input type='email' className='form-control' id='inputEmail4' />
				</FormGroup>
				<FormGroup className=' col-md-6'>
					<label for='inputPassword4'>Full name</label>
					<input type='password' className='form-control' id='inputPassword4' />
				</FormGroup>
			</FormRow>
			<FormGroup>
				<label for='inputAddress'>Address</label>
				<input type='text' className='form-control' id='inputAddress' />
			</FormGroup>
			<FormRow>
				<FormGroup className='col-md-5'>
					<label for='inputCity'>Email</label>
					<input type='text' className='form-control' id='inputCity' />
				</FormGroup>
				<FormGroup className='col-md-5'>
					<label for='inputState'>Mobile</label>
					<input type='text' className='form-control' id='inputCity' />
				</FormGroup>
				<FormGroup className='col-md-2'>
					<label for='inputZip'>Age</label>
					<input type='text' className='form-control' id='inputZip' />
				</FormGroup>
			</FormRow>
		</form>
	);
};

export default EmployeeForm;
