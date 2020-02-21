import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'
import ReactDOM from 'react-dom';
import { HashRouter, Route} from "react-router-dom";
// import { BaseRouter, Route} from "react-router-dom";
import App from './components/App';
import './normalize.css'
import './index.css';

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  //   </Provider>,
  <HashRouter basename='/'>
  <Provider store={store}>
      <Route component={App}/>
    </Provider>
  </HashRouter>,
document.getElementById('root'));