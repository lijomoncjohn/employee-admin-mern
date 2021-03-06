import React from 'react';
import NavBar from '../NavBar/NavBar';

const AuthorizedLayout = ({ children }) => {
	return (
		<>
			<>
				<NavBar />
				<div className='container'>
					<div className='inner-body'>{children}</div>
				</div>
			</>
			{/* <Footer /> */}
		</>
	);
};

export default AuthorizedLayout;
