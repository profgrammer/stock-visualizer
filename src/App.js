import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReactPromise from 'redux-promise';

import SearchBar from './components/searchBar';
import StockList from './components/stockList';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(ReactPromise));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar />
        <StockList />
      </div>
    </Provider>
  );
}

export default App;
