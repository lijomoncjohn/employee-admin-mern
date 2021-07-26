import React from 'react';
import AuthorizedLayout from './AuthorizedLayout/AuthorizedLayout';
import UnAuthorizedLayout from './UnAuthorizedLayout/UnAuthorizedLayout';

const Layout = ({ isAuthorised, children }) => {
	const content = isAuthorised ? (
		<AuthorizedLayout>{children}</AuthorizedLayout>
	) : (
		<UnAuthorizedLayout>{children}</UnAuthorizedLayout>
	);
	return <>{content}</>;
};

export default Layout;
