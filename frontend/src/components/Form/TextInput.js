import React from 'react';

const TextInput = (props) => {
	const { id, type, onChange, value, defaultValue, classNames } = props;

	return (
		<input
			className={`${classNames} form-control`}
			type={type}
			id={id}
			onChange={onChange}
			value={value}
			defaultValue={defaultValue}
		/>
	);
};

export default TextInput;
