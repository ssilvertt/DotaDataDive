import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import useMeta from '@/utils/hooks/useMeta';
import { MatchPlayerPositionType, MetaHero } from '@/utils/types';
import {
	ColumnDef,
	SortingState,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../spinner';
interface DataTableProps<TValue> {
	columns: ColumnDef<MetaHero, TValue>[];
	position: MatchPlayerPositionType;
}

export function DataTable<TValue>({
	columns,
	position,
}: DataTableProps<TValue>) {
	const [sorting, setSorting] = useState<SortingState>([
		{ id: 'winRate', desc: true },
		{ id: 'matchCount', desc: true },
	]);
	const { loading, error, combinedData } = useMeta(position);
	const table = useReactTable({
		data: combinedData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting,
		},
	});

	return (
		<div className='w-auto'>
			<Table
				className='border mx-auto shadow-xl'
				style={{ boxShadow: '0px 6px 10px 7px rgba(0, 0, 0, 0.2)' }}
			>
				<TableHeader>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id}>
							<TableHead></TableHead>
							{headerGroup.headers.map(header => {
								return (
									<TableHead key={header.id} className=''>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row, index) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && 'selected'}
							>
								<TableCell width={1} className='w-0 pl-2'>
									{index + 1}
								</TableCell>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id} className=''>
										<Link to={`/heroes/${row.original.heroId}`}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</Link>
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length + 1}
								className='h-24 text-center'
							>
								<Spinner />
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
