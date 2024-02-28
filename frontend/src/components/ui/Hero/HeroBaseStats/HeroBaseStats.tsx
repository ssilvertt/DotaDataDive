import { Hero } from '@/utils/types';
import HeroBaseStat from '../BaseStat/HeroBaseStat';
import HeroHealth from '../HeroHealth/HeroHealth';
import HeroMana from '../HeroMana/HeroMana';
interface HeroBaseStatsProps {
	hero: Hero;
}

const HeroBaseStats = ({ hero }: HeroBaseStatsProps) => {
	const baseStats = [
		{
			url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png',
			stat: hero.stats.startingDamageMin + '-' + hero.stats.startingDamageMax,
			tooltipText: 'Damage',
		},
		{
			url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png',
			stat: hero.stats.startingArmor.toFixed(1),
			tooltipText: 'Armor',
		},
		{
			url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png',
			stat: hero.stats.moveSpeed.toString(),
			tooltipText: 'Movement speed',
		},
		{
			url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png',
			stat: hero.stats.attackRate.toFixed(1),
			tooltipText: 'Base Attack Time',
		},
		{
			url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png',
			stat: (hero.stats.agilityBase + 100).toString(),
			tooltipText: 'Attack speed',
		},
		{
			url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png',
			stat: hero.stats.attackRange.toString(),
			tooltipText: 'Attack range',
		},
	];

	return (
		<div className='flex flex-col mt-6 lg:py-4 lg:pl-6 lg:border-y lg:border-gray-400/40 lg:pr-14 justify-center align-middle'>
			<div className='flex flex-row justify-center align-middle'>
				{baseStats.map(stat => (
					<HeroBaseStat key={stat.url} {...stat} />
				))}
			</div>
			<HeroHealth hero={hero} />
			<HeroMana hero={hero} />
		</div>
	);
};

export default HeroBaseStats;
