import { Hero } from '@/utils/types';

interface HeroModelProps {
	hero: Hero;
}

const HeroModel = ({ hero }: HeroModelProps) => {
	return (
		<div className='flex flex-col items-start ml-8 w-full'>
			<video className='h-[52rem] w-[52rem] rounded-lg' autoPlay loop muted>
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
