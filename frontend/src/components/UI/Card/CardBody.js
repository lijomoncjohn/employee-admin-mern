import React from 'react';

const CardBody = (props) => {
	const { classNames, children } = props;

	return <div className={`${classNames} card-body`}>{children}</div>;
};

export default CardBody;
