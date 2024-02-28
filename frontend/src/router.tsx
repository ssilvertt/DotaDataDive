import { createBrowserRouter } from 'react-router-dom';
import HeroData from './components/views/HeroData';
import Heroes from './components/views/Heroes/Heroes';
import Meta from './components/views/Meta';
import DefaultLayout from './layouts/DefaultLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '/',
				element: <Meta />,
			},
			{
				path: '/heroes',
				element: <Heroes />,
			},
			{
				path: '/heroes/:id',
				element: <HeroData />,
			},
		],
	},
]);

export default router;
