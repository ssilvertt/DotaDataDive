import { Hero } from './types'

interface HeroSelectorProps {
	id: string | undefined
	heroes: Hero[]
}

const heroSelector = ({ id, heroes }: HeroSelectorProps): Hero | undefined => {
	return heroes.find(hero => hero.id === Number(id))
}

export default heroSelector
