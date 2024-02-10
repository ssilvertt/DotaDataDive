import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MetaHero } from '@/utils/types';
import { columns } from '../DataTable/Columns';
import { DataTable } from '../DataTable/DataTable';

interface TabsComponentProps {
	sortedData: MetaHero[];
}

const TabsComponent = ({ sortedData }: TabsComponentProps) => {
	const renderContent = (value: string) => {
		return <DataTable columns={columns} data={sortedData} />
	};

	return (
		<Tabs defaultValue='overall' className='w-full'>
			<TabsList className='flex flex-row w-full bg-background'>
				<TabsTrigger value='overall'>Overall</TabsTrigger>
				<TabsTrigger value='carry'>Carry</TabsTrigger>
				<TabsTrigger value='mid'>Mid</TabsTrigger>
				<TabsTrigger value='offlane'>Offlane</TabsTrigger>
				<TabsTrigger value='softsupp'>Soft support</TabsTrigger>
				<TabsTrigger value='fullsupp'>Full support</TabsTrigger>
			</TabsList>
			<TabsContent value='overall'>{renderContent('overall')}</TabsContent>
			<TabsContent value='carry'>{renderContent('carry')}</TabsContent>
			<TabsContent value='mid'>{renderContent('mid')}</TabsContent>
			<TabsContent value='offlane'>{renderContent('offlane')}</TabsContent>
			<TabsContent value='softsupp'>{renderContent('softsupp')}</TabsContent>
			<TabsContent value='fullsupp'>{renderContent('fullsupp')}</TabsContent>
		</Tabs>
	);
};

export default TabsComponent;
