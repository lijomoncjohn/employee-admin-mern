import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeForm from '../../components/Employee/EmployeeForm';

import Button from '../../components/UI/Button/Button';
import AppModal from '../../components/UI/Modal/AppModal';
import Table from '../../components/UI/Table/Table';
import TableBody from '../../components/UI/Table/TableBody';
import TableHeader from '../../components/UI/Table/TableHeader';
import { AuthContext } from '../../core/context/authContext';
import { AuthAction } from '../../core/entities/auth/action';
import { EmpAction } from '../../core/entities/employee/action';

const headings = [
	'Employee ID',
	'Name',
	'Email',
	'Age',
	'Address',
	'Mobile',
	'Action',
];

const data = [
	{
		id: 1,
		name: 'Alwin',
		email: 'alwin@email.com',
		age: 25,
		address: 'alwin, chengannur, kerala',
		mobile: '9000010000',
	},
];

const Dashboard = () => {
	const dispatch = useDispatch();
	const auth = useContext(AuthContext);

	const emp = useSelector((state) => state.emp.emp);

	const [modal, setModal] = useState(false);

	const handleClose = () => setModal(false);
	const handleShow = () => setModal(true);

	useEffect(() => {
		dispatch(AuthAction.resetAuth());
		dispatch(EmpAction.fetchAllEmpployees(auth.token));
	}, []);

	useEffect(() => {
		if (emp !== undefined) {
			console.log(emp.message);
		}
	}, [auth.token.dispatch]);

	if (emp === undefined) {
		return <h3>No employees</h3>;
	}

	return (
		<>
			<div>
				<div class='d-flex flex-row-reverse mb-3 mt-3'>
					<div className='ml-3'>
						<Button className='btn-sm' title={'Add new entry'} onClick={handleShow} />
					</div>
					<div className='ml-3'>
						<form class='form-inline'>
							<label class='sr-only' for='inlineFormInputName2'>
								Name
							</label>
							<input
								type='text'
								class='form-control form-control-sm mb-2 mr-sm-2'
								placeholder='search here...'
							/>
							<Button
								type='submit'
								className='btn btn-primary btn-sm mb-2'
								title={'GO'}
							/>
						</form>
					</div>
				</div>
				<Table className='table-sm'>
					<TableHeader className='bg-light' headings={headings} />
					<TableBody>
						{emp.data.map((emp) => (
							<tr key={emp._id}>
								<td>{emp.employeeId}</td>
								<td>{emp.name}</td>
								<td>{emp.email}</td>
								<td>{emp.age}</td>
								<td>{emp.address}</td>
								<td>{emp.mobile}</td>
								<td>
									<Button className='btn-sm btn-success mr-2' title={'Edit'} />
									<Button className='btn-sm btn-danger' title={'Delete'} />
								</td>
							</tr>
						))}
					</TableBody>
				</Table>
			</div>

			<AppModal show={modal} size={'lg'} handleClose={handleClose}>
				<EmployeeForm />
			</AppModal>
		</>
	);
};

export default Dashboard;
