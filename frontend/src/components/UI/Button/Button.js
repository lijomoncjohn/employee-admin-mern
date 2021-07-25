import React from 'react';

const Button = (props) => {
	const { id, onClick, value, defaultValue, title, className, type } = props;

	return (
		<button
			type={type}
			id={id}
			onClick={onClick}
			value={value}
			defaultValue={defaultValue}
			className={`${className} btn btn-md`}>
			{title}
		</button>
	);
};

export default Button;
