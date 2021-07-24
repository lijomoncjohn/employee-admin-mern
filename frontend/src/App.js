import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ROUTES } from './core/base/constants';

import Login from './containers/Auth/Login';
import Layout from './layout/Layout';
import { useAuth } from './core/context/authHook';
import Dashboard from './containers/Dashboard/Dashboard';
import { AuthContext } from './core/context/authContext';

function App() {
	const { token, userId, login, logout } = useAuth();

	let routes;

	if (token) {
		routes = (
			<Switch>
				<Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
				<Route path='*' component={Dashboard} />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path={ROUTES.HOME} component={Login} exact />
				<Route path='*' component={Login} />
			</Switch>
		);
	}
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}}>
			<Router>
				<Layout isAuthorised={!!token}>{routes}</Layout>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
