import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home.tsx';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			// {
			// 	path: '/user-details',
			// 	element: '',
			// },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
