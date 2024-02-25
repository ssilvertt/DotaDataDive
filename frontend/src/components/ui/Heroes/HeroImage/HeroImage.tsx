import { Hero } from '@/utils/types'
import { Link } from 'react-router-dom'
import './heroimage.css'
interface HeroImageProps {
	hero: Hero
}

const HeroImage = ({ hero }: HeroImageProps) => {
	return (
		<Link to={`/heroes/${hero.id}`} className='relative cursor-pointer block m-1 hover:shadow-lg hover:scale-[2.3] hover:z-20 transition-transform ease-out duration-100 group'>
			<div>
				<img
					src={`https://cdn.stratz.com/images/dota2/heroes/${hero.shortName}_vert.png`}
					alt={hero.displayName}
					className='w-[50px] h-[70px] border border-transparent  group-hover:border-black '
				/>
			</div>
			<div className='absolute inset-0 z-10 text-center flex flex-col justify-end opacity-0'>
				<small className='hover:opacity-100 duration-300;'>{hero.displayName}</small>
			</div>
		</Link>
	)
}

export default HeroImage
