import React from 'react';
import { useSelector } from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const StockList = props => {

    const stocks = useSelector(state => state.stocks.stocks);
    console.log("stocks - ", stocks);

    const getStockClosePrices = timeSeries => {
        const closePrices = Object.keys(timeSeries).map(key => parseInt(timeSeries[key]["4. close"], 10)).reverse();
        console.log(closePrices);
        return closePrices;
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Stock Ticker</th>
                        <th>Graph</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock => {
                        return (
                            <tr>
                                <td className="stock-symbol">
                                    {stock["Meta Data"]["2. Symbol"].toUpperCase()}
                                </td>
                                <td className="stock-graph">
                                    <Sparklines 
                                        data={getStockClosePrices(stock["Time Series (Daily)"])} 
                                        width={200} 
                                        height={50} 
                                        margin={5}>
                                            <SparklinesLine color="red" />
                                        </Sparklines>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StockList;