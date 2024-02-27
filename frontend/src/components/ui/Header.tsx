import { NavLink } from 'react-router-dom';
import NavButton from './NavButton';
const Header = () => {
	return (
		<header>
			<div className=' text-white px-6 py-4 flex items-center justify-center lg:justify-normal'>
				<div className='flex space-x-4 items-center text-[#d6dadd] hover:text-white order-2 lg:order-1'>
					<div className='pl-10 pr-10'>
						<NavLink to='/'>
							<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
								DotaDataDive
							</h3>
						</NavLink>
					</div>
				</div>
				<div className='order-1 lg:order-2 lg:pr-4'>
					<NavButton to='/'>META</NavButton>
				</div>
				<div className='order-3 lg:order-3'>
					<NavButton to='/heroes'>HEROES</NavButton>
				</div>
			</div>
		</header>
	);
};

export default Header;
