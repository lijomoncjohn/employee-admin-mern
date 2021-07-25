import React from 'react';

const Button = (props) => {
	const { id, onChange, value, defaultValue, title, classNames } = props;

	return (
		<button
			id={id}
			onChange={onChange}
			value={value}
			defaultValue={defaultValue}
			className={`${classNames} btn btn-md btn-primary`}>
			{title}
		</button>
	);
};

export default Button;
