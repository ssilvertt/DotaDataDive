import { MetaHero } from '@/utils/types';
import { ColumnDef } from '@tanstack/react-table';
export const columns: ColumnDef<MetaHero>[] = [

	{
		accessorKey: 'displayName',
		header: 'Hero',
		cell: ({ row }) => {
			return (
				<div className='flex flex-row align-middle just'>
					<img
						className='w-[68px] h-[40px]'
						src={`https://cdn.stratz.com/images/dota2/heroes/${row.original.shortName}_horz.png`}
					/>{' '}
					<p className='my-auto ml-1 text-[#c1c1c1]'>
						{row.original.displayName}
					</p>
				</div>
			);
		},
	},
	{
		accessorKey: 'winRate',
		header: ({ column }) => {
			return (
				<a
					className='hover:brightness-200 cursor-pointer'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Winrate
				</a>
			);
		},
		cell: ({ row }) => {
			const winRate = row.original.winRate ? Number(row.original.winRate).toFixed(1) : 0;
			return (
				<div className={`${winRate >= 50 ? 'text-green-400' : 'text-red-500'}`}>
					{winRate}%
				</div>
			);
		},
	},	
	{
		accessorKey: 'matchCount',
		header: ({ column }) => {
			return (
				<a
					className='hover:brightness-200 cursor-pointer'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Matches
				</a>
			);
		},
	},
];
