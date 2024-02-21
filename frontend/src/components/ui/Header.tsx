import NavLink from './NavLink';
const Header = () => {
	return (
		<header className='py-5 border-b border-gray-200'>
			<div className='container mx-auto flex items-center justify-between'>
				<div className='flex items-center'>
					<h1 className='text-xl font-bold tracking-tight'>DotaDataDive</h1>
				</div>
				<div className='flex items-center justify-center space-x-6'>
					<NavLink to='/' label='Home' />
					<NavLink to='/meta' label='Meta' />
					<NavLink to='/heroes' label='Heroes' />
				</div>
			</div>
		</header>
	);
};

export default Header;
