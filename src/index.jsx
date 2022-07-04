import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './data/store';
import SettingProvieder from './data/store/context/SettingProvieder';
import App from './App';
import './i18next';
import '../node_modules/flag-icon-css/css/flag-icons.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SettingProvieder>
          <App />
        </SettingProvieder>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
