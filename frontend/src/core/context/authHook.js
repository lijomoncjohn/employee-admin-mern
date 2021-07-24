import { useState, useCallback, useEffect } from 'react';

export const useAuth = () => {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState(false);

	const login = useCallback((token, userId) => {
		setToken(token);
		setUserId(userId);

		localStorage.setItem(
			'userDetails',
			JSON.stringify({
				token: token,
				userId: userId,
			})
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		localStorage.removeItem('userDetails');
	});

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('userDetails'));

		if (userData && userData.token) {
			login(userData.token, userData.userId);
		}
	}, [login]);

	return { token, userId, login, logout };
};
