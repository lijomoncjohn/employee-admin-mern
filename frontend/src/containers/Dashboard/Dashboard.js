import React from 'react';
import Button from '../../components/UI/Button/Button';
import Table from '../../components/UI/Table/Table';
import TableBody from '../../components/UI/Table/TableBody';
import TableHeader from '../../components/UI/Table/TableHeader';

const headings = ['Employee ID', 'Name', 'Email', 'Age', 'Address', 'Mobile'];

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
	return (
		<>
			<div>
				<div class='d-flex flex-row-reverse mb-3 mt-3'>
					<div className='ml-3'>
						<button
							type='button'
							class='btn btn-primary btn-sm'
							data-toggle='modal'
							data-target='#exampleModal'>
							Add new entry +
						</button>{' '}
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
								classNames='btn btn-primary btn-sm mb-2'
								title={'GO'}
							/>
						</form>
					</div>
				</div>
				<Table>
					<TableHeader className='bg-light' headings={headings} />
					<TableBody>
						{data.map((emp) => (
							<tr>
								<td>{emp.id}</td>
								<td>{emp.name}</td>
								<td>{emp.email}</td>
								<td>{emp.age}</td>
								<td>{emp.address}</td>
								<td>{emp.mobile}</td>
							</tr>
						))}
					</TableBody>
				</Table>
			</div>

			<div
				class='modal fade'
				id='exampleModal'
				tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div class='modal-dialog' role='document'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='exampleModalLabel'>
								Modal title
							</h5>
							<button
								type='button'
								class='close'
								data-dismiss='modal'
								aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div class='modal-body'>...</div>
						<div class='modal-footer'>
							<button type='button' class='btn btn-secondary' data-dismiss='modal'>
								Close
							</button>
							<button type='button' class='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
