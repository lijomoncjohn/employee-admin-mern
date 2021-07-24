import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ROUTES } from './core/base/constants';

import Login from './containers/Auth/Login';
import Layout from './layout/Layout';

function App() {
	const routes = (
		<Switch>
			<Route path={ROUTES.HOME} component={Login} exact />
			<Route path='*' component={Login} />
		</Switch>
	);
	return (
		<Router>
			<Layout isAuthorised={true}>{routes}</Layout>
		</Router>
	);
}

export default App;
