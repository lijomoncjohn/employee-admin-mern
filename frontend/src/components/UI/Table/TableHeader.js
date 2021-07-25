import React from 'react';

const TableHeader = ({ headings }) => {
	return (
		<thead className='bg-light'>
			<tr>
				{headings.map((heading) => (
					<th scope='col'>{heading}</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
