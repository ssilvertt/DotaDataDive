import { MetaHero } from '@/utils/types';
interface HeroCardProps {
	hero: MetaHero;
}

const HeroCard = ({ hero }: HeroCardProps) => {
	return <div>{hero.displayName}</div>;
};

export default HeroCard;
