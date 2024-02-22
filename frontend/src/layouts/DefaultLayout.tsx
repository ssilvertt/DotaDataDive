import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<div className="flex-grow">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default DefaultLayout;
