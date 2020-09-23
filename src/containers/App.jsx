import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

import Layout from './Layout';

const App = ({ children }) => (
  <Provider store={store}>
    <Layout>
      { children }
    </Layout>
  </Provider>
);

export default App;
