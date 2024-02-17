export interface AbilityDisplayType {
	[key: number]: string;
}

export interface Hero {
	id: number;
	displayName: string;
	shortName: string;
	stats: HeroStatType;
	abilities: HeroAbilityType[];
}

export interface HeroAbilityType {
	slot: number;
	ability: AbilityType;
}

export interface AbilityType {
	language: AbilityLanguageType;
	name: string;
}

export interface AbilityLanguageType {
	displayName: string;
	description: string;
	attributes: string[];
}

export interface HeroStatType {
	primaryAttribute: string;
	complexity: number;
	attackType: string;
	startingDamageMin: number;
	startingDamageMax: number;
	startingArmor: number;
	moveSpeed: number;
	attackRate: number;
	attackRange: number;
	strengthBase: number;
	strengthGain: number;
	agilityBase: number;
	agilityGain: number;
	intelligenceBase: number;
	intelligenceGain: number;
}

export interface Constants {
	heroes: Hero[];
}

export interface HeroWinWeekType {
	week: number;
	heroId: number;
	winCount: number;
	matchCount: number;
}

export interface HeroWinrate {
	displayName: string;
	shortName: string;
	week: number | undefined;
	winCount: number | undefined;
	matchCount: number | undefined;
}

export interface MetaHero {
	week: number;
	heroId: number;
	winCount: number;
	matchCount: number;
	displayName: string;
	shortName: string;
	winRate: string | undefined;
}

export interface GetHeroesResult {
	constants: {
		heroes: Hero[];
	};
}

export interface GetMetaResult {
	heroStats: {
		winWeek: HeroWinWeekType[];
	};
}

export interface QueryResult {
	constants: Constants;
}


export enum MatchPlayerPositionType {
  All = 'ALL',
  Filtered = 'FILTERED',
  Position_1 = 'POSITION_1',
  Position_2 = 'POSITION_2',
  Position_3 = 'POSITION_3',
  Position_4 = 'POSITION_4',
  Position_5 = 'POSITION_5',
  Unknown = 'UNKNOWN'
}