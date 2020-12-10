import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {seaarchTicker} from '../actions/searchTicker';

const SearchBar = props => {

    const [ticker, setTicker] = useState('');
    const dispatch = useDispatch();
    function getStockDetails(event) {
        event.preventDefault();
        if(ticker === "") {
            return alert("please enter a ticker");
        }
        // add the ticker to the list here
        dispatch(seaarchTicker(ticker));
        setTicker('');
    }

    return (
        <form onSubmit={getStockDetails} className="input-group my-3">
            <input value={ticker} onChange={e => setTicker(e.target.value)} type="text" className="form-control" placeholder="Search for a stock here.." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">Search</button>
            </div>
        </form>
    );

};

export default SearchBar;