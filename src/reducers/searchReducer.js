import {SEARCH_TICKER} from '../actions/searchTicker';

const searchReducer = (state={stocks: []}, action) => {
    switch(action.type) {
        case SEARCH_TICKER:
            if(!action.payload.data["Error Message"]) {
                return {
                    stocks: [action.payload.data, ...state.stocks]
                }
            } else {
                alert("data for this stock not found!");
                return state;
            }
        default:
            return state;
    }
}

export default searchReducer;