import { useQuery } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';
import { GET_ALL_META } from '../queries';
import { HeroWinWeekType, MatchPlayerPositionType, MetaHero } from '../types';
import useHeroes from './useHeroes';

const useMeta = (initialPos: MatchPlayerPositionType) => {
	const [positionIds, setPositionIds] = useState(initialPos);
	const { heroes } = useHeroes();
	const { data, loading, error } = useQuery(GET_ALL_META, {
		variables: {
			positionIds:
				initialPos === MatchPlayerPositionType.All ? undefined : positionIds,
		},
		nextFetchPolicy: 'cache-first',
	});

	useEffect(() => {
		setPositionIds(initialPos);
	}, [initialPos]);

	const meta: HeroWinWeekType[] = data?.heroStats?.winWeek ?? [];
	const combinedData: MetaHero[] = useMemo(() => {
		if (loading || error) return [];

		return heroes.map(hero => {
			const heroMeta = meta.find(m => m.heroId === hero.id);
			const winRate = heroMeta?.matchCount
				? ((heroMeta.winCount / heroMeta.matchCount) * 100).toFixed(1)
				: undefined;

			return {
				displayName: hero.displayName,
				shortName: hero.shortName,
				winRate,
				week: heroMeta?.week ?? 0,
				heroId: heroMeta?.heroId ?? 0,
				winCount: heroMeta?.winCount ?? 0,
				matchCount: heroMeta?.matchCount ?? 0,
			};
		});
	}, [heroes, meta, loading]);

	return { loading, error, meta, combinedData };
};

export default useMeta;
