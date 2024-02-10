
import useMeta from '@/utils/hooks/useMeta';
import { MetaHero } from '@/utils/types';
import TabsComponent from '../ui/HeroMeta/TabsComponent/TabsComponent';

const Meta = () => {
	const { loading, error, combinedData } = useMeta();

	const sortedData: MetaHero[] = combinedData.sort((a, b) => {
		const winRateA = Number(a.winRate) ?? -Infinity;
		const winRateB = Number(b.winRate) ?? -Infinity;
		return winRateB - winRateA;
	});

	return (
		<>
			{loading ? (
				<div>Загрузка...</div>
			) : error ? (
				<div>Ошибка</div>
			) : (
				<TabsComponent sortedData={sortedData} />
			)}
		</>
	);
};

export default Meta;
