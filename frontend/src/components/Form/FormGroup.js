import React from 'react';

const FormGroup = (props) => {
	const { classNames, children } = props;

	return <div className={`${classNames} form-group`}>{children}</div>;
};

export default FormGroup;
