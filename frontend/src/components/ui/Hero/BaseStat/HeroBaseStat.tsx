import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

interface HeroBaseStatProps {
	url: string;
	stat: string;
	tooltipText: string;
}

const HeroBaseStat = ({ url, stat, tooltipText }: HeroBaseStatProps) => {
	return (
		<>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<div className='flex flex-col items-center justify-center align-middle mx-1 lg:mx-3 '>
							<img src={url} className='w-5 h-5' alt='' />
							<div className='small-text'>{stat}</div>
						</div>
					</TooltipTrigger>
					<TooltipContent className='text-white bg-[#262c31] text-sm border-2 border-black'>
						<div className='p-2'>{tooltipText}</div>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</>
	);
};

export default HeroBaseStat;
