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

const Dashboard = () => {
	const dispatch = useDispatch();
	const auth = useContext(AuthContext);

	const emp = useSelector((state) => state.emp.emp);

	const [modal, setModal] = useState(false);

	const handleClose = () => {
		setModal(false);
		setEditPreference({});
	};
	const handleShow = () => setModal(true);

	const initialData = {
		employeeId: '',
		name: '',
		email: '',
		mobile: '',
		age: '',
		address: '',
	};

	const [editPreference, setEditPreference] = useState(initialData);

	const handleSubmit = (values, { setSubmitting }) => {
		dispatch(EmpAction.create(values, auth.token));
		setModal(false);
	};

	const handleUpdate = (values, { setSubmitting }) => {
		dispatch(EmpAction.update(auth.token, editPreference._id, values));
		setModal(false);
	};

	const handleEdit = (values) => {
		if (values === null) {
			setEditPreference({});
			return;
		}

		setEditPreference({
			employeeId: values.employeeId,
			name: values.name,
			email: values.email,
			mobile: values.mobile,
			age: values.age,
			address: values.address,
			_id: values._id,
		});
		setModal(true);
	};

	const handleDelete = (id) => {
		let confirmation = window.confirm('Are you sure you want delete this item?');
		if (confirmation) {
			dispatch(EmpAction.delete(auth.token, id));
		} else {
			return;
		}
	};

	useEffect(() => {
		dispatch(AuthAction.resetAuth());
		dispatch(EmpAction.fetchAllEmpployees(auth.token));
		setModal(false);
	}, []);

	useEffect(() => {
		dispatch(EmpAction.fetchAllEmpployees(auth.token));
	}, [dispatch, auth.token, modal]);

	useEffect(() => {
		if (emp !== undefined && emp.success) {
			dispatch(EmpAction.fetchAllEmpployees(auth.token));
			setModal(false);
		}
	}, [dispatch, auth.token]);

	if (emp === undefined || emp.data.length === 0) {
		return <h3>No employees</h3>;
	}

	return (
		<>
			<div>
				<div className='d-flex flex-row-reverse mb-3 mt-3'>
					<div className='ml-3'>
						<Button
							className='btn-sm btn-primary'
							title={'Add new entry'}
							onClick={handleShow}
						/>
					</div>
					<div className='ml-3'>
						<form className='form-inline'>
							<label className='sr-only' for='inlineFormInputName2'>
								Name
							</label>
							<input
								type='text'
								className='form-control form-control-sm mb-2 mr-sm-2'
								placeholder='search here...'
							/>
							<Button
								type='submit'
								className='btn btn-outline-primary btn-sm mb-2'
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
									<Button
										className='btn-sm btn-success mr-2'
										title={'Edit'}
										onClick={() => handleEdit(emp)}
									/>
									<Button
										className='btn-sm btn-danger'
										title={'Delete'}
										onClick={() => handleDelete(emp._id)}
									/>
								</td>
							</tr>
						))}
					</TableBody>
				</Table>
			</div>

			<AppModal
				show={modal}
				size={'lg'}
				heading={'Add new employee'}
				handleClose={handleClose}>
				<EmployeeForm
					handleEdit={handleEdit}
					editValues={editPreference}
					handleUpdate={handleUpdate}
					handleSubmit={handleSubmit}
				/>
			</AppModal>
		</>
	);
};

export default Dashboard;
