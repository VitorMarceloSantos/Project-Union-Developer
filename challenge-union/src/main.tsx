import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { DetailsUser } from './pages/DetailsUser.tsx';
import { UsersProvider } from './context/UsersProvider.tsx';
import { PaginationNumbersProvider } from './context/PaginationNumbersProvider.tsx';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/user-details/:slug',
				element: <DetailsUser />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UsersProvider>
			<PaginationNumbersProvider>
				<RouterProvider router={router} />
			</PaginationNumbersProvider>
		</UsersProvider>
	</React.StrictMode>,
	// No Modo Estrito, o React chamará sua função de atualização duas vezes para ajudá-lo a encontrar impurezas acidentais. Este é um comportamento apenas de desenvolvimento e não afeta a produção
);
