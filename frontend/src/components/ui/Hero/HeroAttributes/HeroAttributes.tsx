import { Hero } from '@/utils/types'
import AttributeRow from '../AttributeRow/AttributeRow'

interface HeroAttProps {
	hero: Hero
}

const HeroAttributes = ({ hero }: HeroAttProps) => {
	return (
		<>
			<div className='flex flex-col mt-6 border-y border-gray-400/40 py-4 border-r pr-6'>
				<AttributeRow
					attribute='STRENGTH'
					base={hero.stats.strengthBase}
					gain={hero.stats.strengthGain}
					attribute_type='str'
				/>
				<AttributeRow
					attribute='AGILITY'
					base={hero.stats.agilityBase}
					gain={hero.stats.agilityGain}
					attribute_type='agi'
				/>
				<AttributeRow
					attribute='INTELLIGENCE'
					base={hero.stats.intelligenceBase}
					gain={hero.stats.intelligenceGain}
					attribute_type='int'
				/>
			</div>
		</>
	)
}

export default HeroAttributes
