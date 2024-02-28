import { Hero } from '@/utils/types';

interface HeroModelProps {
	hero: Hero;
}

const HeroModel = ({ hero }: HeroModelProps) => {
	return (
		<div className='flex lg:flex-col items-start lg:ml-8 lg:w-full order-1 lg:order-2 lg:mt-0'>
			<video className='lg:h-[52rem] lg:w-[52rem] h-[10rem] w-[10rem] rounded-lg' autoPlay loop muted>
				<source
					src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${hero.shortName}.webm`}
					type='video/webm'
				/>
				<img
					src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${hero.shortName}.png`}
				/>
			</video>
		</div>
	);
};

export default HeroModel;
