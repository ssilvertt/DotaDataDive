import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavButtonProps {
	to: string;
	children: ReactNode;
}

const NavButton = ({ to, children }: NavButtonProps) => {
	return (
		<NavLink to={to} className='text-[#d6dadd] hover:text-white font-reaver'>
			{children}
		</NavLink>
	);
};

export default NavButton;
