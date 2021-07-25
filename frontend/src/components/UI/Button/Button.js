import React from 'react';

const Button = (props) => {
	const { id, onClick, value, defaultValue, title, className } = props;

	return (
		<button
			id={id}
			onClick={onClick}
			value={value}
			defaultValue={defaultValue}
			className={`${className} btn btn-md btn-primary`}>
			{title}
		</button>
	);
};

export default Button;
