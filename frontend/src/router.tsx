import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout'
import Meta from './components/views/Meta'
import Heroes from './components/views/Heroes'
import HeroData from './components/views/HeroData/HeroData'


const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout/>,
		children: [
			{
				path: '/',
				element: <Meta/>
			},
			{
				path: '/heroes',
				element: <Heroes/>
			},
			{
				path: '/heroes/:id',
				element: <HeroData/>
			}
		]
	}
]);

export default router
