import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const reducer = combineReducers({
    stocks: searchReducer
});

export default reducer;