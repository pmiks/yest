import React           from 'react';
import ReactDOM        from 'react-dom';
import App             from './App';
import Store           from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider}      from 'react-redux'

import './index.css';
import * as serviceWorker from './serviceWorker';


//let drawScene=()=>{
// return
  ReactDOM.render(
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={Store}>
              <App store={Store} />
            </Provider>
          </BrowserRouter>
      , document.getElementById('root'));

//}



//Store.subscribe(drawScene);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
