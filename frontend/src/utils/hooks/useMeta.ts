import { useQuery } from '@apollo/client';
import { GET_META } from '../queries';
import { GetMetaResult, MetaHero } from '../types';
import { useMemo } from 'react';
import useHeroes from './useHeroes';
import { Separator } from "@/components/ui/separator"

const useMeta = () => {
	const { loading, error, data } = useQuery<GetMetaResult>(GET_META);
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
