import React from 'react';

const TextInput = (props) => {
	const { id, type, name, onChange, onBlur, value, defaultValue, className } =
		props;

	return (
		<input
			className={`${className} form-control`}
			type={type}
			name={name}
			id={id}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			defaultValue={defaultValue}
		/>
	);
};

export default TextInput;
