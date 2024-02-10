import { GET_HEROES } from '@/utils/queries.ts';
import { useQuery } from '@apollo/client';
import { GetHeroesResult } from '../types';

const useHeroes = () => {
	const { loading, error, data } = useQuery<GetHeroesResult>(GET_HEROES);
	const heroes = data?.constants?.heroes ?? [];

	return { loading, error, heroes };
};

export default useHeroes;
