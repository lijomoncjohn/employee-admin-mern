import React from 'react';

const CardBody = (props) => {
	const { className, children } = props;

	return <div className={`${className} card-body`}>{children}</div>;
};

export default CardBody;
