import React from 'react';

const FormGroup = (props) => {
	const { className, children } = props;

	return <div className={`${className} form-group`}>{children}</div>;
};

export default FormGroup;
