import React from 'react';

interface HeroRowProps {
	children: React.ReactNode;
}

const HeroRow = ({ children }: HeroRowProps) => {
	return <div className='flex flex-row flex-grow-1 basis-0'>{children}</div>;
};

export default HeroRow;
