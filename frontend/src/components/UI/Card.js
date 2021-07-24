import React from 'react';

const Card = (props) => {
	const { classNames, children } = props;
	return <div className={`${classNames} card`}>{children}</div>;
};

export default Card;
