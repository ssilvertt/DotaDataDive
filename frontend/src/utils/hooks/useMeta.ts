import { gql, useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import { GET_META } from '../queries';
import { GetMetaResult, MatchPlayerPositionType, MetaHero } from '../types';
import useHeroes from './useHeroes';

const GET_ALL_META = gql(`
query GET_ALL_META($positionIds: [MatchPlayerPositionType]){
	heroStats {
		winWeek(take: 1, positionIds: $positionIds) {
			week
			heroId
			winCount
			matchCount
		}
	}
}
`);

const useMeta = (initialPos:MatchPlayerPositionType) => {
	const { loading, error } = useQuery<GetMetaResult>(GET_META);
	
	const { data } = useQuery(GET_ALL_META, { variables: { positionIds: initialPos }});
	
	

	const { heroes } = useHeroes();
	const meta = data?.heroStats?.winWeek ?? [];
	const combinedData: MetaHero[] = useMemo(() => {
		if (loading || error) return [];

		const combined = [];
		for (const hero of heroes) {
			const heroMeta = meta.find(m => m.heroId === hero.id);
			if (heroMeta) {
				const winRate = heroMeta.matchCount
					? ((heroMeta.winCount / heroMeta.matchCount) * 100).toFixed(1)
					: undefined;
				combined.push({
					displayName: hero.displayName,
					shortName: hero.shortName,
					winRate,
					...heroMeta,
				});
			} else {
				console.warn(`Hero meta not found for hero ${hero.id}`);
			}
		}
		return combined;
	}, [heroes, meta, loading]);

	return { loading, error, meta, combinedData };
};

export default useMeta;
