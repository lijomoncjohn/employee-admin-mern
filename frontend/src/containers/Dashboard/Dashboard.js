import React from 'react';
import Button from '../../components/UI/Button';

const Dashboard = () => {
	return (
		<div>
			<div class='d-flex flex-row-reverse mb-3 mt-3'>
				<div className='ml-3'>
					<Button classNames='btn-sm px-3' title={'Add New Entry +'} />
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
			<table class='table table-bordered'>
				<thead className='bg-light'>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>First</th>
						<th scope='col'>Last</th>
						<th scope='col'>Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope='row'>2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope='row'>3</th>
						<td colspan='2'>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
