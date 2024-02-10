import { Hero } from '@/utils/types'

interface HeroHealthProps {
	hero: Hero
}

const HeroHealth = ({ hero }: HeroHealthProps) => {
	return (
		<>
			<p className='small-text'>MAX HEALTH</p>
			<div className='bg-gradient-to-b from-[#406c54] to-[#5ba15f] text-white flex justify-between items-center p-3 rounded-[3px] w-52 h-6'>
				<div className='w-1/3'></div>
				<div className='w-1/3 text-center'>
					<p className='font-reaver leading-7 text-md font-semibold tracking-widest lol'>
						{hero.stats.strengthBase * 22 + 120}
					</p>
				</div>
				<div className='w-1/3 text-right'>
					<p className='font-radiance text-sm font-bold lol'>
						+{hero.stats.strengthGain.toFixed(1)}
					</p>
				</div>
			</div>
		</>
	)
}

export default HeroHealth
