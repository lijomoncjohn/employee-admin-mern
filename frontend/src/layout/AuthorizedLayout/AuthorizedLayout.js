import React from 'react';

const AuthorizedLayout = ({ children }) => {
	return (
		<>
			<div className='container-fluid'>
				{/* <NavBar /> */}
				<div className='container'>
					<div className='inner-body'>{children}</div>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default AuthorizedLayout;
