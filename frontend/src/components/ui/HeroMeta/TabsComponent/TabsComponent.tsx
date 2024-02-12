import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MetaHero } from '@/utils/types';
import { columns } from '../DataTable/Columns';
import { DataTable } from '../DataTable/DataTable';

interface TabsComponentProps {
	sortedData: MetaHero[];
}

const TabsComponent = ({ sortedData }: TabsComponentProps) => {
	const renderContent = (value: string) => {
		return <DataTable columns={columns} data={sortedData} role='value' />
	};

	return (
		<Tabs defaultValue='ALL' className='w-full'>
			<TabsList className='flex flex-row w-full bg-background'>
				<TabsTrigger value='ALL'>Overall</TabsTrigger>
				<TabsTrigger value='POSITION_1'>Carry</TabsTrigger>
				<TabsTrigger value='POSITION_2'>Mid</TabsTrigger>
				<TabsTrigger value='POSITION_3'>Offlane</TabsTrigger>
				<TabsTrigger value='POSITION_4'>Soft support</TabsTrigger>
				<TabsTrigger value='POSITION_5'>Full support</TabsTrigger>
			</TabsList>
			<TabsContent value='ALL'><DataTable columns={columns} data={sortedData} role='value' /></TabsContent>
			<TabsContent value='POSITION_1'>{renderContent('POSITION_1')}</TabsContent>
			<TabsContent value='POSITION_2'>{renderContent('POSITION_2')}</TabsContent>
			<TabsContent value='POSITION_3'>{renderContent('POSITION_3')}</TabsContent>
			<TabsContent value='POSITION_4'>{renderContent('POSITION_4')}</TabsContent>
			<TabsContent value='POSITION_5'>{renderContent('POSITION_5')}</TabsContent>
		</Tabs>
	);
};

export default TabsComponent;
