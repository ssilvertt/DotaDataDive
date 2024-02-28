import loadout_bg_field_001_jpg from '../assets/hero-backgrounds/loadout_bg_field_001_jpg.jpeg'
import loadout_bg_field_002_jpg from '../assets/hero-backgrounds/loadout_bg_field_002_jpg.jpeg'
import loadout_bg_field_003_jpg from '../assets/hero-backgrounds/loadout_bg_field_003_jpg.jpeg'
import loadout_bg_field_004_jpg from '../assets/hero-backgrounds/loadout_bg_field_004_jpg.jpeg'
import loadout_bg_fire_001_jpg from '../assets/hero-backgrounds/loadout_bg_fire_001_jpg.jpeg'
import loadout_bg_fire_002_jpg from '../assets/hero-backgrounds/loadout_bg_fire_002_jpg.jpeg'
import loadout_bg_fire_003_jpg from '../assets/hero-backgrounds/loadout_bg_fire_003_jpg.jpeg'
import loadout_bg_fire_004_jpg from '../assets/hero-backgrounds/loadout_bg_fire_004_jpg.jpeg'
import loadout_bg_forest_001_jpg from '../assets/hero-backgrounds/loadout_bg_forest_001_jpg.jpeg'
import loadout_bg_forest_002_jpg from '../assets/hero-backgrounds/loadout_bg_forest_002_jpg.jpeg'
import loadout_bg_forest_003_jpg from '../assets/hero-backgrounds/loadout_bg_forest_003_jpg.jpeg'
import loadout_bg_forest_004_jpg from '../assets/hero-backgrounds/loadout_bg_forest_004_jpg.jpeg'
import loadout_bg_ice_001_jpg from '../assets/hero-backgrounds/loadout_bg_ice_001_jpg.jpeg'
import loadout_bg_ice_002_jpg from '../assets/hero-backgrounds/loadout_bg_ice_002_jpg.jpeg'
import loadout_bg_ice_003_jpg from '../assets/hero-backgrounds/loadout_bg_ice_003_jpg.jpeg'
import loadout_bg_ice_004_jpg from '../assets/hero-backgrounds/loadout_bg_ice_004_jpg.jpeg'
import loadout_bg_jungle_001_jpg from '../assets/hero-backgrounds/loadout_bg_jungle_001_jpg.jpeg'
import loadout_bg_jungle_002_jpg from '../assets/hero-backgrounds/loadout_bg_jungle_002_jpg.jpeg'
import loadout_bg_jungle_003_jpg from '../assets/hero-backgrounds/loadout_bg_jungle_003_jpg.jpeg'
import loadout_bg_jungle_004_jpg from '../assets/hero-backgrounds/loadout_bg_jungle_004_jpg.jpeg'
import loadout_bg_outworld_001_jpg from '../assets/hero-backgrounds/loadout_bg_outworld_001_jpg.jpeg'
import loadout_bg_outworld_002_jpg from '../assets/hero-backgrounds/loadout_bg_outworld_002_jpg.jpeg'
import loadout_bg_outworld_003_jpg from '../assets/hero-backgrounds/loadout_bg_outworld_003_jpg.jpeg'
import loadout_bg_outworld_004_jpg from '../assets/hero-backgrounds/loadout_bg_outworld_004_jpg.jpeg'
import loadout_bg_rocky_001_jpg from '../assets/hero-backgrounds/loadout_bg_rocky_001_jpg.jpeg'
import loadout_bg_rocky_002_jpg from '../assets/hero-backgrounds/loadout_bg_rocky_002_jpg.jpeg'
import loadout_bg_rocky_003_jpg from '../assets/hero-backgrounds/loadout_bg_rocky_003_jpg.jpeg'
import loadout_bg_rocky_004_jpg from '../assets/hero-backgrounds/loadout_bg_rocky_004_jpg.jpeg'
import loadout_bg_sky_001_jpg from '../assets/hero-backgrounds/loadout_bg_sky_001_jpg.jpeg'
import loadout_bg_sky_002_jpg from '../assets/hero-backgrounds/loadout_bg_sky_002_jpg.jpeg'
import loadout_bg_sky_003_jpg from '../assets/hero-backgrounds/loadout_bg_sky_003_jpg.jpeg'
import loadout_bg_sky_004_jpg from '../assets/hero-backgrounds/loadout_bg_sky_004_jpg.jpeg'
import loadout_bg_water_001_jpg from '../assets/hero-backgrounds/loadout_bg_water_001_jpg.jpeg'
import loadout_bg_water_002_jpg from '../assets/hero-backgrounds/loadout_bg_water_002_jpg.jpeg'
import loadout_bg_water_003_jpg from '../assets/hero-backgrounds/loadout_bg_water_003_jpg.jpeg'
import loadout_bg_water_004_jpg from '../assets/hero-backgrounds/loadout_bg_water_004_jpg.jpeg'


type HeroLoadoutBackground = {
  [key in
    | 'abaddon'
    | 'alchemist'
    | 'ancient_apparition'
    | 'antimage'
    | 'arc_warden'
    | 'axe'
    | 'bane'
    | 'batrider'
    | 'beastmaster'
    | 'bloodseeker'
    | 'bounty_hunter'
    | 'brewmaster'
    | 'bristleback'
    | 'broodmother'
    | 'centaur'
    | 'chaos_knight'
    | 'chen'
    | 'clinkz'
    | 'rattletrap'
    | 'crystal_maiden'
    | 'dark_seer'
    | 'dark_willow'
    | 'dawnbreaker'
    | 'dazzle'
    | 'death_prophet'
    | 'disruptor'
    | 'doom_bringer'
    | 'dragon_knight'
    | 'drow_ranger'
    | 'earth_spirit'
    | 'earthshaker'
    | 'elder_titan'
    | 'ember_spirit'
    | 'enchantress'
    | 'enigma'
    | 'faceless_void'
    | 'furion'
    | 'gyrocopter'
    | 'huskar'
    | 'invoker'
    | 'jakiro'
    | 'juggernaut'
    | 'keeper_of_the_light'
    | 'kunkka'
    | 'legion_commander'
    | 'leshrac'
    | 'lich'
    | 'life_stealer'
    | 'lina'
    | 'lion'
    | 'lone_druid'
    | 'luna'
    | 'lycan'
    | 'magnataur'
    | 'medusa'
    | 'meepo'
    | 'mirana'
    | 'monkey_king'
    | 'morphling'
    | 'muerta'
    | 'naga_siren'
    | 'furion'
    | 'necrolyte'
    | 'night_stalker'
    | 'nyx_assassin'
    | 'ogre_magi'
		| 'grimstroke'
		| 'hoodwink'
		| 'marci'
		| 'mars'
		| 'skywrath_mage'
    | 'omniknight'
    | 'oracle'
    | 'obsidian_destroyer'
    | 'pangolier'
    | 'phantom_assassin'
    | 'phantom_lancer'
    | 'phoenix'
    | 'primal_beast'
    | 'puck'
    | 'pudge'
    | 'pugna'
    | 'queenofpain'
    | 'razor'
    | 'riki'
    | 'rubick'
    | 'sand_king'
    | 'shadow_demon'
    | 'nevermore'
    | 'shadow_shaman'
    | 'silencer'
    | 'slardar'
    | 'slark'
    | 'snapfire'
    | 'sniper'
    | 'spectre'
    | 'spirit_breaker'
    | 'storm_spirit'
    | 'sven'
    | 'techies'
    | 'templar_assassin'
    | 'terrorblade'
    | 'tidehunter'
    | 'shredder'
    | 'tinker'
    | 'tiny'
    | 'treant'
    | 'troll_warlord'
    | 'tusk'
    | 'abyssal_underlord'
    | 'undying'
    | 'ursa'
    | 'vengefulspirit'
    | 'venomancer'
    | 'viper'
    | 'visage'
    | 'void_spirit'
    | 'warlock'
    | 'weaver'
    | 'windrunner'
    | 'winter_wyvern'
    | 'witch_doctor'
    | 'skeleton_king'
    | 'zuus']: [string, string];
};

const heroLoadoutBackground: HeroLoadoutBackground = {
	abaddon: ["radial-gradient(circle at 50% 0%, rgba(23, 18, 58, 0.8), rgba(12, 19, 31))", loadout_bg_rocky_001_jpg],
  alchemist: ["radial-gradient(circle at 50% 0%, rgba(29, 19, 54, 0.8), rgba(12, 8, 21))", loadout_bg_rocky_001_jpg],
  ancient_apparition: ["radial-gradient(circle at 50% 0%, rgba(24, 35, 70, 0.8), rgba(8, 19, 21))", loadout_bg_ice_001_jpg],
  antimage: ["radial-gradient(circle at 50% 0%, rgba(35, 25, 48, 0.8), rgba(8, 11, 25))", loadout_bg_outworld_001_jpg],
  arc_warden: ["radial-gradient(circle at 50% 0%, rgba(23, 30, 56, 0.8), rgba(31, 10, 18))", loadout_bg_outworld_004_jpg],
  axe: ["radial-gradient(circle at 50% 0%, rgba(49, 17, 23, 0.8), rgba(0, 0, 0))", loadout_bg_rocky_001_jpg],
  bane: ["radial-gradient(circle at 50% 0%, rgba(34, 29, 66, 0.8), rgba(15, 6, 14))", loadout_bg_outworld_003_jpg],
  batrider: ["radial-gradient(circle at 50% 0%, rgba(50, 24, 33, 0.8), rgba(10, 9, 10))", loadout_bg_forest_004_jpg],
  beastmaster: ["radial-gradient(circle at 50% 0%, rgba(41, 28, 28, 0.8), rgba(10, 9, 10))", loadout_bg_rocky_004_jpg],
  bloodseeker: ["radial-gradient(circle at 50% 0%, rgba(52, 22, 26, 0.8), rgba(10, 9, 10))",  loadout_bg_fire_001_jpg],
  bounty_hunter: ["radial-gradient(circle at 50% 0%, rgba(44, 20, 20, 0.8), rgba(10, 9, 9))",  loadout_bg_jungle_001_jpg],
  brewmaster: ["radial-gradient(circle at 50% 0%, rgba(52, 33, 24, 0.8), rgba(10, 9, 9))",  loadout_bg_forest_001_jpg],
  bristleback: ["radial-gradient(circle at 50% 0%, rgba(41, 28, 27, 0.8), rgba(20, 20, 10))",  loadout_bg_forest_004_jpg],
  broodmother: ["radial-gradient(circle at 50% 0%, rgba(21, 31, 50, 0.8), rgba(11, 10, 20))",  loadout_bg_forest_003_jpg],
  centaur: ["radial-gradient(circle at 50% 0%, rgba(41, 20, 23, 0.8), rgba(20, 10, 10))",  loadout_bg_rocky_004_jpg],
  chaos_knight: ["radial-gradient(circle at 50% 0%, rgba(45, 9, 9, 0.8), rgba(16, 16, 20))",  loadout_bg_rocky_003_jpg],
  chen: ["radial-gradient(circle at 50% 0%, rgba(27, 43, 58, 0.8), rgba(28, 26, 20))",  loadout_bg_rocky_002_jpg],
  clinkz: ["radial-gradient(circle at 50% 0%, rgba(54, 30, 26, 0.8), rgba(15, 10, 22))",  loadout_bg_fire_004_jpg],
  rattletrap: ["radial-gradient(circle at 50% 0%, rgba(34, 31, 46, 0.8), rgba(14, 14, 17))",  loadout_bg_field_004_jpg],
  crystal_maiden: ["radial-gradient(circle at 50% 0%, rgba(24, 41, 66, 0.8), rgba(10, 15, 18))",  loadout_bg_ice_003_jpg],
  dark_seer: ["radial-gradient(circle at 50% 0%, rgba(34, 25, 57, 0.8), rgba(17, 16, 23))",  loadout_bg_outworld_004_jpg],
  dark_willow: ["radial-gradient(circle at 50% 0%, rgba(57, 25, 50, 0.8), rgba(9, 18, 11))", loadout_bg_field_002_jpg],
  dawnbreaker: ["radial-gradient(circle at 50% 0%, rgba(38, 25, 56, 0.8), rgba(20, 14, 9))", loadout_bg_field_002_jpg],
  dazzle: ["radial-gradient(circle at 50% 0%, rgba(60, 26, 57, 0.8), rgba(11, 9, 20))", loadout_bg_outworld_002_jpg],
  death_prophet: ["radial-gradient(circle at 50% 0%, rgba(25, 42, 50, 0.8), rgba(24, 6, 13))", loadout_bg_outworld_001_jpg],
  disruptor: ["radial-gradient(circle at 50% 0%, rgba(27, 34, 57, 0.8), rgba(24, 6, 6))", loadout_bg_sky_001_jpg],
  doom_bringer: ["radial-gradient(circle at 50% 0%, rgba(50, 25, 25, 0.8), rgba(10, 11, 18))", loadout_bg_fire_003_jpg],
  dragon_knight: ["radial-gradient(circle at 50% 0%, rgba(63, 35, 26, 0.8), rgba(13, 14, 18))", loadout_bg_rocky_002_jpg],
  drow_ranger: ["radial-gradient(circle at 50% 0%, rgba(23, 31, 54, 0.8), rgba(10, 11, 18))", loadout_bg_ice_002_jpg],
  earth_spirit: ["radial-gradient(circle at 50% 0%, rgba(25, 53, 41, 0.8), rgba(13, 14, 19))", loadout_bg_forest_002_jpg],
  earthshaker: ["radial-gradient(circle at 50% 0%, rgba(50, 35, 25, 0.8), rgba(15, 8, 11))", loadout_bg_forest_001_jpg],
  elder_titan: ["radial-gradient(circle at 50% 0%, rgba(38, 35, 26, 0.8), rgba(10, 11, 18))", loadout_bg_rocky_004_jpg],
  ember_spirit: ["radial-gradient(circle at 50% 0%, rgba(45, 18, 24, 0.8), rgba(9, 5, 5))", loadout_bg_fire_002_jpg],
  enchantress: ["radial-gradient(circle at 50% 0%, rgba(41, 36, 49, 0.8), rgba(13, 19, 15))", loadout_bg_field_001_jpg],
  enigma: ["radial-gradient(circle at 50% 0%, rgba(38, 20, 44, 0.8), rgba(15, 15, 25))", loadout_bg_outworld_004_jpg],
  faceless_void: ["radial-gradient(circle at 50% 0%, rgba(26, 23, 50, 0.8), rgba(18, 7, 21))", loadout_bg_outworld_003_jpg],
  furion: ["radial-gradient(circle at 50% 0%, rgba(36, 40, 27, 0.8), rgba(15, 9, 14))", loadout_bg_forest_004_jpg],
  gyrocopter: ["radial-gradient(circle at 50% 0%, rgba(30, 19, 45, 0.8), rgba(15, 19, 24))", loadout_bg_sky_004_jpg],
  huskar: ["radial-gradient(circle at 50% 0%, rgba(25, 42, 50, 0.8), rgba(12, 8, 8))", loadout_bg_rocky_001_jpg],
  invoker: ["radial-gradient(circle at 50% 0%, rgba(38, 21, 41, 0.8), rgba(18, 8, 15))", loadout_bg_sky_004_jpg],
  jakiro: ["radial-gradient(circle at 50% 0%, rgba(46, 29, 45, 0.8), rgba(11, 9, 15))", loadout_bg_ice_004_jpg],
  juggernaut: ["radial-gradient(circle at 50% 0%, rgba(38, 31, 36, 0.8), rgba(10, 9, 13))", loadout_bg_sky_003_jpg],
  keeper_of_the_light: ["radial-gradient(circle at 50% 0%, rgba(46, 21, 52, 0.8), rgba(19, 16, 25))", loadout_bg_field_002_jpg],
  kunkka: ["radial-gradient(circle at 50% 0%, rgba(20, 52, 66, 0.8), rgba(15, 8, 21))", loadout_bg_water_004_jpg],
  legion_commander: ["radial-gradient(circle at 50% 0%, rgba(50, 25, 32, 0.8), rgba(11, 9, 21))", loadout_bg_rocky_003_jpg],
  leshrac: ["radial-gradient(circle at 50% 0%, rgba(17, 41, 56, 0.8), rgba(12, 14, 21))", loadout_bg_ice_001_jpg],
  lich: ["radial-gradient(circle at 50% 0%, rgba(19, 25, 41, 0.8), rgba(10, 12, 17))", loadout_bg_ice_002_jpg],
  life_stealer: ["radial-gradient(circle at 50% 0%, rgba(45, 21, 31, 0.8), rgba(15, 9, 13))", loadout_bg_rocky_004_jpg],
  lina: ["radial-gradient(circle at 50% 0%, rgba(50, 19, 25, 0.8), rgba(15, 10, 15))", loadout_bg_fire_001_jpg],
  lion: ["radial-gradient(circle at 50% 0%, rgba(26, 24, 52, 0.8), rgba(8, 11, 17))", loadout_bg_forest_003_jpg],
  lone_druid: ["radial-gradient(circle at 50% 0%, rgba(23, 33, 43, 0.8), rgba(10, 11, 19))", loadout_bg_jungle_003_jpg],
  luna: ["radial-gradient(circle at 50% 0%, rgba(46, 22, 46, 0.8), rgba(19, 15, 26))", loadout_bg_ice_003_jpg],
  lycan: ["radial-gradient(circle at 50% 0%, rgba(45, 32, 25, 0.8), rgba(15, 10, 15))", loadout_bg_forest_003_jpg],
  magnataur: ["radial-gradient(circle at 50% 0%, rgba(33, 18, 40, 0.8), rgba(19, 13, 16))", loadout_bg_forest_002_jpg],
  medusa: ["radial-gradient(circle at 50% 0%, rgba(36, 28, 50, 0.8), rgba(10, 9, 13))", loadout_bg_jungle_004_jpg],
  meepo: ["radial-gradient(circle at 50% 0%, rgba(42, 32, 45, 0.8), rgba(11, 12, 21))", loadout_bg_field_001_jpg],
  mirana: ["radial-gradient(circle at 50% 0%, rgba(43, 22, 48, 0.8), rgba(12, 10, 17))", loadout_bg_ice_004_jpg],
  monkey_king: ["radial-gradient(circle at 50% 0%, rgba(32, 34, 51, 0.8), rgba(18, 15, 21))", loadout_bg_jungle_002_jpg],
  morphling: ["radial-gradient(circle at 50% 0%, rgba(29, 51, 70, 0.8), rgba(14, 12, 16))", loadout_bg_water_003_jpg],
  muerta: ["radial-gradient(circle at 50% 0%, rgba(29, 46, 58, 0.8), rgba(10, 14, 21))", loadout_bg_outworld_001_jpg],
  naga_siren: ["radial-gradient(circle at 50% 0%, rgba(45, 25, 42, 0.8), rgba(14, 10, 14))", loadout_bg_water_001_jpg],
  necrolyte: ["radial-gradient(circle at 50% 0%, rgba(26, 35, 47, 0.8), rgba(14, 12, 16))", loadout_bg_outworld_002_jpg],
  night_stalker: ["radial-gradient(circle at 50% 0%, rgba(35, 21, 40, 0.8), rgba(11, 14, 19))", loadout_bg_outworld_002_jpg],
  nyx_assassin: ["radial-gradient(circle at 50% 0%, rgba(27, 23, 46, 0.8), rgba(19, 12, 17))", loadout_bg_sky_003_jpg],
  ogre_magi: ["radial-gradient(circle at 50% 0%, rgba(37, 17, 40, 0.8), rgba(12, 10, 18))", loadout_bg_forest_002_jpg],
  omniknight: ["radial-gradient(circle at 50% 0%, rgba(52, 32, 36, 0.8), rgba(12, 11, 15))", loadout_bg_field_001_jpg],
  oracle: ["radial-gradient(circle at 50% 0%, rgba(28, 29, 50, 0.8), rgba(11, 10, 18))", loadout_bg_sky_002_jpg],
  obsidian_destroyer: ["radial-gradient(circle at 50% 0%, rgba(32, 50, 52, 0.8), rgba(17, 9, 15))", loadout_bg_outworld_001_jpg],
  pangolier: ["radial-gradient(circle at 50% 0%, rgba(29, 28, 43, 0.8), rgba(11, 11, 18))", loadout_bg_forest_001_jpg],
  phantom_assassin: ["radial-gradient(circle at 50% 0%, rgba(24, 22, 53, 0.8), rgba(11, 11, 16))", loadout_bg_outworld_002_jpg],
  phantom_lancer: ["radial-gradient(circle at 50% 0%, rgba(37, 22, 49, 0.8), rgba(16, 16, 22))", loadout_bg_jungle_001_jpg],
	phoenix: ["radial-gradient(circle at 50% 0%, rgba(57, 35, 26, 0.8), rgba(17, 13, 26))", loadout_bg_sky_003_jpg],
  primal_beast: ["radial-gradient(circle at 50% 0%, rgba(44, 41, 30, 0.8), rgba(17, 13, 26))", loadout_bg_rocky_003_jpg],
  puck: ["radial-gradient(circle at 50% 0%, rgba(32, 25, 50, 0.8), rgba(17, 16, 23))", loadout_bg_outworld_001_jpg],
  pudge: ["radial-gradient(circle at 50% 0%, rgba(40, 37, 26, 0.8), rgba(17, 16, 23))", loadout_bg_jungle_004_jpg],
  pugna: ["radial-gradient(circle at 50% 0%, rgba(28, 40, 26, 0.8), rgba(17, 16, 23))", loadout_bg_outworld_004_jpg],
  queenofpain: ["radial-gradient(circle at 50% 0%, rgba(40, 26, 26, 0.8), rgba(17, 16, 23))", loadout_bg_fire_003_jpg],
  razor: ["radial-gradient(circle at 50% 0%, rgba(27, 32, 49, 0.8), rgba(17, 16, 23))", loadout_bg_sky_002_jpg],
  riki: ["radial-gradient(circle at 50% 0%, rgba(27, 32, 49, 0.8), rgba(17, 16, 23))", loadout_bg_outworld_004_jpg],
  rubick: ["radial-gradient(circle at 50% 0%, rgba(24, 45, 40, 0.8), rgba(17, 16, 23))", loadout_bg_outworld_003_jpg],
  sand_king: ["radial-gradient(circle at 50% 0%, rgba(44, 37, 31, 0.8), rgba(23, 16, 16))", loadout_bg_rocky_003_jpg],
  shadow_demon: ["radial-gradient(circle at 50% 0%, rgba(44, 26, 31, 0.8), rgba(23, 16, 16))", loadout_bg_fire_002_jpg],
  nevermore: ["radial-gradient(circle at 50% 0%, rgba(39, 9, 9, 0.8), rgba(9, 5, 5))", loadout_bg_fire_004_jpg],
  shadow_shaman: ["radial-gradient(circle at 50% 0%, rgba(39, 29, 9, 0.8), rgba(14, 9, 9))", loadout_bg_rocky_002_jpg],
  silencer: ["radial-gradient(circle at 50% 0%, rgba(34, 20, 37, 0.8), rgba(23, 17, 17))", loadout_bg_sky_001_jpg],
  skywrath_mage: ["radial-gradient(circle at 50% 0%, rgba(40, 51, 66, 0.8), rgba(2, 2, 2))", loadout_bg_sky_001_jpg],
  slardar: ["radial-gradient(circle at 50% 0%, rgba(45, 40, 66, 0.8), rgba(17, 12, 20))", loadout_bg_water_001_jpg],
  slark: ["radial-gradient(circle at 50% 0%, rgba(26, 35, 57, 0.8), rgba(6, 4, 11))", loadout_bg_water_001_jpg],
  snapfire: ["radial-gradient(circle at 50% 0%, rgba(58, 29, 24, 0.8), rgba(11, 4, 4))", loadout_bg_field_003_jpg],
  sniper: ["radial-gradient(circle at 50% 0%, rgba(52, 27, 33, 0.8), rgba(11, 4, 4))", loadout_bg_field_001_jpg],
  spectre: ["radial-gradient(circle at 50% 0%, rgba(25, 23, 53, 0.8), rgba(11, 4, 4))", loadout_bg_outworld_001_jpg],
  spirit_breaker: ["radial-gradient(circle at 50% 0%, rgba(26, 35, 57, 0.8), rgba(6, 4, 11))", loadout_bg_rocky_001_jpg],
  storm_spirit: ["radial-gradient(circle at 50% 0%, rgba(31, 27, 49, 0.8), rgba(9, 4, 11))", loadout_bg_sky_002_jpg],
  sven: ["radial-gradient(circle at 50% 0%, rgba(26, 34, 57, 0.8), rgba(9, 4, 11))", loadout_bg_ice_001_jpg],
  techies: ["radial-gradient(circle at 50% 0%, rgba(49, 39, 34, 0.8), rgba(9, 4, 11))", loadout_bg_field_001_jpg],
  templar_assassin: ["radial-gradient(circle at 50% 0%, rgba(44, 34, 49, 0.8), rgba(9, 4, 11))", loadout_bg_outworld_004_jpg],
  terrorblade: ["radial-gradient(circle at 50% 0%, rgba(36, 22, 44, 0.8), rgba(6, 18, 13))", loadout_bg_outworld_003_jpg],
  tidehunter: ["radial-gradient(circle at 50% 0%, rgba(22, 59, 57, 0.8), rgba(6, 18, 13))", loadout_bg_water_002_jpg],
  shredder: ["radial-gradient(circle at 50% 0%, rgba(59, 28, 22, 0.8), rgba(6, 18, 13))", loadout_bg_field_002_jpg],
  tinker: ["radial-gradient(circle at 50% 0%, rgba(49, 40, 27, 0.8), rgba(6, 18, 13))", loadout_bg_field_003_jpg],
  tiny: ["radial-gradient(circle at 50% 0%, rgba(32, 40, 47, 0.8), rgba(6, 18, 13))", loadout_bg_forest_004_jpg],
  treant: ["radial-gradient(circle at 50% 0%, rgba(34, 47, 32, 0.8), rgba(6, 18, 13))", loadout_bg_forest_003_jpg],
  troll_warlord: ["radial-gradient(circle at 50% 0%, rgba(51, 28, 27, 0.8), rgba(6, 18, 13))", loadout_bg_forest_002_jpg],
  tusk: ["radial-gradient(circle at 50% 0%, rgba(32, 46, 72, 0.8), rgba(10, 6, 18))", loadout_bg_ice_002_jpg],
  abyssal_underlord: ["radial-gradient(circle at 50% 0%, rgba(22, 44, 39, 0.8), rgba(10, 6, 18))", loadout_bg_outworld_002_jpg],
  undying: ["radial-gradient(circle at 50% 0%, rgba(22, 44, 39, 0.8), rgba(10, 6, 18))", loadout_bg_rocky_001_jpg],
  ursa: ["radial-gradient(circle at 50% 0%, rgba(35, 39, 45, 0.8), rgba(10, 6, 18))", loadout_bg_forest_001_jpg],
  vengefulspirit: ["radial-gradient(circle at 50% 0%, rgba(25, 28, 59, 0.8), rgba(10, 6, 18))", loadout_bg_sky_001_jpg],
  venomancer: ["radial-gradient(circle at 50% 0%, rgba(38, 37, 59, 0.8), rgba(10, 6, 18))", loadout_bg_jungle_003_jpg],
  viper: ["radial-gradient(circle at 50% 0%, rgba(28, 52, 44, 0.8), rgba(10, 6, 18))", loadout_bg_jungle_001_jpg],
  visage: ["radial-gradient(circle at 50% 0%, rgba(38, 35, 22, 0.8), rgba(10, 6, 18)", loadout_bg_ice_003_jpg],
  void_spirit: ["radial-gradient(circle at 50% 0%, rgba(33, 21, 42, 0.8), rgba(10, 6, 18))", loadout_bg_outworld_002_jpg],
  warlock: ["radial-gradient(circle at 50% 0%, rgba(32, 32, 38, 0.8), rgba(10, 6, 18))", loadout_bg_fire_001_jpg],
  weaver: ["radial-gradient(circle at 50% 0%, rgba(39, 45, 49, 0.8), rgba(10, 6, 18))", loadout_bg_jungle_002_jpg],
  windrunner: ["radial-gradient(circle at 50% 0%, rgba(35, 46, 30, 0.8), rgba(10, 6, 18))", loadout_bg_field_004_jpg],
  winter_wyvern: ["radial-gradient(circle at 50% 0%, rgba(35, 46, 30, 0.8), rgba(10, 6, 18))", loadout_bg_ice_004_jpg],
  witch_doctor: ["radial-gradient(circle at 50% 0%, rgba(30, 30, 41, 0.8), rgba(10, 6, 18))", loadout_bg_jungle_001_jpg],
  skeleton_king: ["radial-gradient(circle at 50% 0%, rgba(22, 48, 56, 0.8), rgba(10, 6, 18))", loadout_bg_outworld_002_jpg],
  zuus: ["radial-gradient(circle at 50% 0%, rgba(29, 28, 45, 0.8), rgba(10, 6, 18))", loadout_bg_outworld_001_jpg],
  grimstroke: ["radial-gradient(circle at 50% 0%, rgba(25, 42, 50, 0.8), rgba(18, 10, 10))", loadout_bg_outworld_003_jpg],
  marci: ["radial-gradient(circle at 50% 0%, rgba(32, 31, 49, 0.8), rgba(13, 14, 19))", loadout_bg_field_003_jpg],
  mars: ["radial-gradient(circle at 50% 0%, rgba(40, 20, 23, 0.8), rgba(19, 17, 13))", loadout_bg_rocky_002_jpg],
  hoodwink: ["radial-gradient(circle at 50% 0%, rgba(50, 42, 32, 0.8), rgba(18, 10, 10)", loadout_bg_field_004_jpg]
};

export default heroLoadoutBackground;