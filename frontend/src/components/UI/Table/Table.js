import React from 'react';

const Table = ({ children, className }) => {
	return (
		<div class='table-responsive'>
			<table className={`${className} table table-bordered`}>{children}</table>
		</div>
	);
};

export default Table;
