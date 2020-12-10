import Axios from "axios";

export const SEARCH_TICKER = 'search_ticker';
const API_KEY = 'JTYD8CJD7AGH5YOZ';

export const seaarchTicker = (ticker) => {
    const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;
    const response = Axios.get(endpoint);
    return {
        type: SEARCH_TICKER,
        payload: response
    }
}