import React from 'react';

const FormLabel = (props) => {
	const { label } = props;

	return <label className='sr-only'>{label}</label>;
};

export default FormLabel;
