import { gql } from '@apollo/client';
export const GET_HEROES = gql`
	query {
		constants {
			heroes {
				id
				displayName
				shortName
				stats {
					primaryAttribute
					complexity
					attackType
					startingDamageMin
					startingDamageMax
					startingArmor
					moveSpeed
					attackRate
					attackRange
					strengthBase
					strengthGain
					agilityBase
					agilityGain
					intelligenceBase
					intelligenceGain
				}
				abilities {
					slot
					ability {
						name
						language {
							displayName
							description
							attributes
						}
					}
				}
			}
		}
	}
`;

export const GET_META = gql`
	query {
		heroStats {
			winWeek(take: 1) {
				week
				heroId
				winCount
				matchCount
			}
		}
	}
`;

export const GET_ALL_META = gql`
query GET_ALL_META($positionIds: [MatchPlayerPositionType]){
	heroStats {
		winWeek(take: 1, positionIds: $positionIds) {
			week
			heroId
			winCount
			matchCount
		}
	}
}
`;