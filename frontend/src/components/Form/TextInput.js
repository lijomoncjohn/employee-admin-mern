import React from 'react';

const TextInput = (props) => {
	const { id, type, name, onChange, onBlur, value, defaultValue, classNames } =
		props;

	return (
		<input
			className={`${classNames} form-control`}
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
