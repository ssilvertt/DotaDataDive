import { Hero } from '@/utils/types';
import HeroImage from './HeroImage/HeroImage';

interface HeroGridProps {
  heroes: Hero[];
  attribute: string;
}

const HeroGrid = ({ heroes, attribute }: HeroGridProps) => {
  const displayHeroes = heroes
    .filter(hero => hero.stats.primaryAttribute === attribute)
    .sort((a, b) => a.displayName.localeCompare(b.displayName)); // Sort by displayName

  return (
    <div className='flex flex-wrap justify-start items-center max-w-[calc(50px*13)]'>
      {displayHeroes.map(hero => (
        <HeroImage key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroGrid;
