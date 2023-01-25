import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';

import { NavigationProvider } from './context/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css.map'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App/>  
    </NavigationProvider>
  </React.StrictMode>
);


