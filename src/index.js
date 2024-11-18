import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Listado from './components/Listado'
import Partido from './components/Partido'
import Ranking from './components/Ranking'

const router = createBrowserRouter([
	{
		path: '',
		element: <App />,
		children: [
			{ path: '', element: <Listado /> },
			{ path: 'listado', element: <Listado /> },
			{ path: 'ranking', element: <Ranking /> },
			{ path: 'partido', element: <Partido /> },
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
)
