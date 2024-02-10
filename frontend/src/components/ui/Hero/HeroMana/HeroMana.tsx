import { Hero } from '@/utils/types'

interface HeroManaProps {
	hero: Hero
}

const HeroMana = ({ hero }: HeroManaProps) => {
	return (
		<>
			<p className='small-text'>MAX MANA</p>
			<div className='bg-gradient-to-b from-[#3882a4] to-[#235877] text-white flex justify-between items-center p-3 rounded-[3px] w-52 h-6'>
				<div className='w-1/3'></div>
				<div className='w-1/3 text-center'>
					<p className='font-reaver leading-7 text-md font-semibold tracking-widest lol'>
						{hero.stats.intelligenceBase * 12 + 75}
					</p>
				</div>
				<div className='w-1/3 text-right'>
					<p className='font-radiance text-sm font-semibold lol'>
						+{(hero.stats.intelligenceBase * 0.05).toFixed(1)}
					</p>
				</div>
			</div>
		</>
	)
}

export default HeroMana
