import { Hero, HeroAbilityType } from '@/utils/types'
import HeroAbilities from '../HeroAbilities/HeroAbilities'
import HeroAttributes from '../HeroAttributes/HeroAttributes'
import HeroBaseStats from '../HeroBaseStats/HeroBaseStats'
import HeroMainStats from '../HeroMainStats/HeroMainStats'
interface HeroStatsProps {
	hero: Hero
	abilities: HeroAbilityType[]
}

const HeroStats = ({ hero, abilities }: HeroStatsProps) => {
	return (
		<div className='flex flex-col items-start mr-8 w-1/2 ml-72'>
			<h1 className='scroll-m-20 text-6xl font-semibold tracking-tight lg:text-6xl mt-[100px] font-reaver mb-4'>{hero.displayName.toUpperCase()}</h1>
			<HeroMainStats hero={hero} />

			<HeroAbilities abilities={abilities} />
			<div className='flex flex-row'>
				<HeroAttributes hero={hero} />
				<HeroBaseStats hero={hero} />
			</div>
		</div>
	)
}

export default HeroStats
