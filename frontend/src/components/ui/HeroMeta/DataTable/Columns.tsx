import { MetaHero } from '@/utils/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<MetaHero>[] = [
	{
		accessorKey: 'displayName',
		header: 'Hero',
		cell: ({row}) => {
			console.log(row);
			return <img className='w-[68px] h-[40px]' src={`https://cdn.stratz.com/images/dota2/heroes/${row.original.shortName}_horz.png`}/>
		}
	},
	{
		accessorKey: 'winRate',
		header: 'Winrate',
	},
	{
		accessorKey: 'matchCount',
		header: 'Matches',
	}
];
