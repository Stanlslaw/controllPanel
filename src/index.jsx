import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './Stores/store.js';
import { Provider } from 'react-redux';

import './index.scss'

import Form from './Components/Form/Form.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Form/>
    </Provider>
  </React.StrictMode>
);