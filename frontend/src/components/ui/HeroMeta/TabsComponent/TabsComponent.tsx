import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useMeta from '@/utils/hooks/useMeta';
import { MatchPlayerPositionType, MetaHero } from '@/utils/types';
import { useState } from 'react';
import { columns } from '../DataTable/Columns';
import { DataTable } from '../DataTable/DataTable';

const TabsComponent = () => {
	const [activeTab, setActiveTab] = useState(MatchPlayerPositionType.All);
	const { loading, error, combinedData } = useMeta(activeTab);

	const sortedData: MetaHero[] = combinedData.sort((a, b) => {
		const winRateA = Number(a.winRate) ?? -Infinity;
		const winRateB = Number(b.winRate) ?? -Infinity;
		return winRateB - winRateA;
	});

	const tabChange = event => {
		console.log(event);
		setActiveTab(event);
	};

	return (
		<Tabs
			defaultValue={MatchPlayerPositionType.All}
			className='w-full'
			onValueChange={tabChange}
		>
			<TabsList className='flex flex-row w-full bg-background'>
				<TabsTrigger value={MatchPlayerPositionType.All}>Overall</TabsTrigger>
				<TabsTrigger value={MatchPlayerPositionType.Position_1}>
					Carry
				</TabsTrigger>
				<TabsTrigger value={MatchPlayerPositionType.Position_2}>
					Mid
				</TabsTrigger>
				<TabsTrigger value={MatchPlayerPositionType.Position_3}>
					Offlane
				</TabsTrigger>
				<TabsTrigger value={MatchPlayerPositionType.Position_4}>
					Soft support
				</TabsTrigger>
				<TabsTrigger value={MatchPlayerPositionType.Position_5}>
					Full support
				</TabsTrigger>
			</TabsList>
			<TabsContent value={MatchPlayerPositionType.All}>
				<DataTable columns={columns} data={sortedData}/>
			</TabsContent>
			<TabsContent value={MatchPlayerPositionType.Position_1}>
				<DataTable columns={columns} data={sortedData}/>
			</TabsContent>
			<TabsContent value={MatchPlayerPositionType.Position_2}>
				<DataTable columns={columns} data={sortedData}/>
			</TabsContent>
			<TabsContent value={MatchPlayerPositionType.Position_3}>
				<DataTable columns={columns} data={sortedData}/>
			</TabsContent>
			<TabsContent value={MatchPlayerPositionType.Position_4}>
				<DataTable columns={columns} data={sortedData}/>
			</TabsContent>
			<TabsContent value={MatchPlayerPositionType.Position_5}>
				<DataTable columns={columns} data={sortedData}/>
			</TabsContent>
		</Tabs>
	);
};

export default TabsComponent;
