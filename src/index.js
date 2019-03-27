import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import routes from './router';
ReactDOM.render(
   <div>
       {routes}
   </div>, 
   document.querySelector('#root')
);
serviceWorker.unregister();
