import { Hero } from '@/utils/types';
import HeroGrid from '../HeroGrid/HeroGrid';

interface HeroAttributeGridProps {
	title: string;
	attribute: string;
	heroes: Hero[];
}

const HeroAttributeGrid = ({
	title,
	attribute,
	heroes,
}: HeroAttributeGridProps) => {
	return (
		<div className='mb-3'>
			<div className='flex items-center ml-1'>
				<img
					className='w-4 h-4'
					src={`https://cdn.stratz.com/images/dota2/primary_attributes/${attribute}.png`}
					alt=''
				/>
				<h2 className='text-l ml-1'>{title}</h2>
			</div>

			<HeroGrid heroes={heroes} attribute={attribute} />
		</div>
	);
};

export default HeroAttributeGrid;
