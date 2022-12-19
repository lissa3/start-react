import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {Provider} from './context/books'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css.map';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App/>   
    </Provider>
  </React.StrictMode>
);


