import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { processResult } from 'immer/dist/internal';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

let store;

export default function configureAppStore() {
	const sagaMiddleware = createSagaMiddleware();

	const store = configureStore({
		reducer: rootReducer,
		preloadedState: {},
		middleware: new MiddlewareArray().concat(sagaMiddleware),
		devTools:
			!processResult.env.NODE_ENV || processResult.env.NODE_ENV === 'development',
	});

	sagaMiddleware.run(rootSaga);
	store.close = () => store.dispatch(END);

	return store;
}

export { store };
