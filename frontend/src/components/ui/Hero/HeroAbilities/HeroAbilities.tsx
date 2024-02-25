import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { HeroAbilityType } from '@/utils/types';

interface HeroAbilityProps {
	ability: HeroAbilityType;
}

const HeroAbility = ({ ability }: HeroAbilityProps) => {
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<img
						key={ability.ability.name}
						src={`https://cdn.stratz.com/images/dota2/abilities/${ability.ability.name}.png`}
						className='w-[52px] h-[52px] hover:brightness-125'
						alt={ability.ability.name}
					/>
				</TooltipTrigger>
				<TooltipContent
					side='bottom'
					className='text-white w-[24rem] p-0 bg-[#12171c] text-sm border-2 border-black'
				>
					<div className='bg-[#1f262b] p-2'>
						<h1 className='font-reaver scroll-m-20 font-bold tracking-tight text-lg lol block'>
							{ability.ability.language.displayName.toUpperCase()}
						</h1>
					</div>
					<div className='p-3 text-[#99afcb]'>
						<p className='mb-4 pr-4'>{ability.ability.language.description}</p>
						{ability.ability.language.attributes.map(att => (
							<div className='text-[#576c86]' key={att}>
								{att}
							</div>
						))}
					</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

const HeroAbilities = ({ abilities }: { abilities: HeroAbilityType[] }) => {
	return (
		<div className='abilities'>
			{abilities?.map(ability => (
				<HeroAbility key={ability.ability.name} ability={ability} />
			))}
		</div>
	);
};

export default HeroAbilities;
