import { Hero } from '@/utils/types'
import { Link } from 'react-router-dom'
import './heroimage.css'
interface HeroImageProps {
	hero: Hero
}

const HeroImage = ({ hero }: HeroImageProps) => {
	return (
		<Link to={`/heroes/${hero.id}`} className='hero group'>
			<div>
				<img
					src={`https://cdn.stratz.com/images/dota2/heroes/${hero.shortName}_vert.png`}
					alt={hero.displayName}
					className='heroImage '
				/>
			</div>
			<div className='heroName'>
				<small>{hero.displayName}</small>
			</div>
		</Link>
	)
}

export default HeroImage
