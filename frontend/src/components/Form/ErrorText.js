import React from 'react';

const ErrorText = (props) => {
	const { error } = props;

	return <small className='text-danger'>{error}</small>;
};

export default ErrorText;
