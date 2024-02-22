import bg from '@/assets/generic_hero_background_png.png';
import useHeroes from '@/utils/hooks/useHeroes.ts';
import styled from 'styled-components';
import HeroAttributeGrid from '../ui/Heroes/HeroAttributeGrid.tsx';
import HeroRow from '../ui/Heroes/HeroRow.tsx';
import Spinner from '../ui/spinner.tsx';

const BackgroundImageLink = styled('div').withConfig({
     shouldForwardProp: (prop) => !['bg'].includes(prop),
   })<{bg: string}>`
  display: flex;
  justify-content: center;
  height: 100%;
  &::before {
    background-size: cover;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    filter: blur(6px);
    z-index: -1;
		
  }
`;

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
		<BackgroundImageLink bg={bg} className=''>
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
		</BackgroundImageLink>
	);
};

export default Heroes;
