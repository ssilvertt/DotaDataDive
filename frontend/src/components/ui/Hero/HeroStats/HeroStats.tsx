import { Hero, HeroAbilityType } from '@/utils/types'
import HeroAbilities from '../HeroAbilities/HeroAbilities'
import HeroAttributes from '../HeroAttributes/HeroAttributes'
import HeroBaseStats from '../HeroBaseStats/HeroBaseStats'
import HeroMainStats from '../HeroMainStats/HeroMainStats'
import './herostats.css'
interface HeroStatsProps {
	hero: Hero
	abilities: HeroAbilityType[]
}

const HeroStats = ({ hero, abilities }: HeroStatsProps) => {
	return (
		<div className='hero-stats'>
			<h1 className='hero-title'>{hero.displayName.toUpperCase()}</h1>
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
