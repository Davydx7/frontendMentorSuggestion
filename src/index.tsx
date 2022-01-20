import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import queryClient from './queryClient';

import AuthProvider from 'components/AuthProvider';

import './styles/main.scss';

ReactDOM.render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</QueryClientProvider>
	</BrowserRouter>,
	document.getElementById('app')
);
