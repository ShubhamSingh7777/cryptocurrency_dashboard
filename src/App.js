import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Component/Home';
import { Provider } from 'react-redux';
import store from '../src/ReactReduxStore/Store'; // Import your Redux store

function App() {
    return (
        <Provider store={store}>
           <Home/>
        </Provider>
    );
}

export default App;
