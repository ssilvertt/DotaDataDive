import NavButton from './NavButton';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header className=''>
			<div className=' text-white px-6 py-4 flex items-center'>
				<div className='flex space-x-4 items-center text-[#d6dadd] hover:text-white'>
					<div className='pl-10'>
						<NavLink to='/'>
							<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
								DotaDataDive
							</h3>
						</NavLink>
					</div>
					<div className='space-x-2'>
						<i className='fas fa-icon1'></i>
						<i className='fas fa-icon2'></i>
						<i className='fas fa-icon3'></i>
					</div>
				</div>
				<div className='space-x-4 '>
					<NavButton to='/'>HOME</NavButton>
					<NavButton to='/meta'>META</NavButton>
					<NavButton to='/heroes'>HEROES</NavButton>
				</div>
			</div>
		</header>
	);
};

export default Header;
