import HeroContainer from '@/components/ui/Hero/HeroContainer/HeroContainer';
import HeroModel from '@/components/ui/Hero/HeroModel/HeroModel';
import HeroStats from '@/components/ui/Hero/HeroStats/HeroStats';
import heroSelector from '@/utils/heroSelector';
import heroLoadoutBackground from '@/utils/herobackgrounds';
import useHeroes from '@/utils/hooks/useHeroes';
import { useParams } from 'react-router-dom';

const HeroData = () => {
	const { id } = useParams();
	const { loading, error, heroes } = useHeroes();
	const hero = heroSelector({ id, heroes });
	const filteredAbilities = hero?.abilities.filter(
		ability => ability.ability.language.displayName !== ''
	);
	console.log(filteredAbilities);
	const heroBg =
		hero && heroLoadoutBackground.hasOwnProperty(hero.shortName)
			? heroLoadoutBackground[
					hero.shortName as keyof typeof heroLoadoutBackground
				]
			: undefined;

	if (loading) {
		return <div>loading</div>;
	}

	if (error) {
		return <div>error</div>;
	}

	if (!hero) {
		return <div>Hero not found</div>;
	}

	return (
		<HeroContainer bg={heroBg ? `${heroBg[0]}, url(${heroBg[1]})` : ''}>
			{filteredAbilities && (
				<HeroStats hero={hero} abilities={filteredAbilities} />
			)}
			<HeroModel hero={hero} />
		</HeroContainer>
	);
};

export default HeroData;
