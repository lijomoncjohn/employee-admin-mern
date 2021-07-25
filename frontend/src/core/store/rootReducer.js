import { combineReducers } from 'redux';
import authReducer from '../entities/auth/reducer';
import empReducer from '../entities/employee/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	emp: empReducer,
});

export default rootReducer;
