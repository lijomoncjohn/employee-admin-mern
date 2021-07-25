import React from 'react';

const CardHeader = (props) => {
	const { classNames, children } = props;
	return <div className={`${classNames} card-header`}>{children}</div>;
};

export default CardHeader;
