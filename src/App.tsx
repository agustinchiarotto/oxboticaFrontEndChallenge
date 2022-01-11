import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/index';
import './App.css';
import history from './routes/history';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Routes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
