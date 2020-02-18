import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from "react-router-dom";
import App from './components/App';
import './normalize.css'
import './index.css';

ReactDOM.render(
  <BrowserRouter basename='/markeboverseas'>
    <Provider store={store}>
      <Route component={App}/>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));