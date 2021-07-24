import { combineReducers } from 'redux';
import reducer from '../entities/auth/reducer';

const rootReducer = combineReducers({
	auth: reducer,
});

export default rootReducer;
