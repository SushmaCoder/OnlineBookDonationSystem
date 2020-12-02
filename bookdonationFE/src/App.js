import React from 'react';
import { render } from 'react-dom';
// import {Home} from './Home/index';
// import Home from './Home/Home';
import client from './Api/client';
import Layout from './Containers/Layout';

import { ApolloProvider } from '@apollo/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Layout></Layout>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));





