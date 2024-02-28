import useHeroes from '@/utils/hooks/useHeroes.ts';
import HeroAttributeGrid from '../../ui/Heroes/HeroAttributeGrid/HeroAttributeGrid.tsx';
import HeroRow from '../../ui/Heroes/HeroRow/HeroRow.tsx';
import Spinner from '../../ui/spinner.tsx';
import './heroes.css'

const Heroes = () => {
	const { loading, error, heroes } = useHeroes();

	if (loading)
		return (
			<div className='text-center mt-5'>
				<Spinner />
			</div>
		);
	if (error) {
		return <p className='text-center text-red-600'>Error: {error.message}</p>;
	}

	return (
		<div id='backgroundImageLink'>
			<div className='flex flex-shrink-0 flex-grow-1 flex-col pt-16'>
				<div className='ml-auto mr-auto pl-4 pr-4 flex flex-col relative'>
					<HeroRow>
						<HeroAttributeGrid
							title='Strength'
							attribute='str'
							heroes={heroes}
						/>
						<HeroAttributeGrid
							title='Agility'
							attribute='agi'
							heroes={heroes}
						/>
					</HeroRow>
					<HeroRow>
						<HeroAttributeGrid
							title='Intelligence'
							attribute='int'
							heroes={heroes}
						/>
						<HeroAttributeGrid
							title='Universal'
							attribute='all'
							heroes={heroes}
						/>
					</HeroRow>
				</div>
			</div>
		</div>
	);
};

export default Heroes;
