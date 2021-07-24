import React from 'react';

const FormLabel = (props) => {
	const { label } = props;

	return <label className={'form-label form-label-sm'}>{label}</label>;
};

export default FormLabel;
