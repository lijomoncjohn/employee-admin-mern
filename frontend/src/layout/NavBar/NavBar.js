import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../core/base/constants';
import { AuthContext } from '../../core/context/authContext';

import './NavBar.css';

const NavBar = () => {
	const auth = useContext(AuthContext);

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-header mb-2'>
			<NavLink className='navbar-brand font-weight-bold' to={ROUTES.DASHBOARD}>
				Employee Admin
			</NavLink>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<NavLink to={ROUTES.DASHBOARD} className='nav-link'>
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to={ROUTES.LOGOUT} className='nav-link'>
							Logout
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
