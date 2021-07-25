import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';

import { ROUTES } from '../../core/base/constants';
import { AuthContext } from '../../core/context/authContext';
import { AuthAction } from '../../core/entities/auth/action';

import './NavBar.css';

const NavBar = () => {
	const auth = useContext(AuthContext);
	const dispatch = useDispatch();
	const history = useHistory();

	const logoutData = useSelector((state) => state.auth.logout);

	useEffect(() => {
		if (logoutData !== undefined && logoutData.success) {
			auth.logout();
			history.push('/');
		}
	}, [dispatch, logoutData]);

	const logout = () => {
		dispatch(AuthAction.logout(auth.token));
	};

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
				<ul className='navbar-nav my-2 my-lg-0'>
					<li class='nav-item dropdown'>
						<Link
							class='nav-link dropdown-toggle'
							id='navbarDropdown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'>
							Admin
						</Link>
						<div
							class='dropdown-menu dropdown-menu-right text-left'
							aria-labelledby='navbarDropdown'>
							<NavLink class='dropdown-item' to={''}>
								Profile
							</NavLink>
							<NavLink class='dropdown-item' to={''}>
								Change Password
							</NavLink>
							<div class='dropdown-divider'></div>
							<NavLink class='dropdown-item' to={''} onClick={logout}>
								Logout
							</NavLink>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
