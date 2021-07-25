import React from 'react';

const CardHeader = (props) => {
	const { className, children } = props;
	return <div className={`${className} card-header`}>{children}</div>;
};

export default CardHeader;
