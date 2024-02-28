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
  alchemist: ["radial-gradient(circle at 50% 0%, rgba(29, 19, 54, 0.8), rgba(12, 8, 21))", '/src/assets/hero-backgrounds/loadout_bg_rocky_001_jpg.jpeg'],
  ancient_apparition: ["radial-gradient(circle at 50% 0%, rgba(24, 35, 70, 0.8), rgba(8, 19, 21))", '/src/assets/hero-backgrounds/loadout_bg_ice_001_jpg.jpeg'],
  antimage: ["radial-gradient(circle at 50% 0%, rgba(35, 25, 48, 0.8), rgba(8, 11, 25))", '/src/assets/hero-backgrounds/loadout_bg_outworld_001_jpg.jpeg'],
  arc_warden: ["radial-gradient(circle at 50% 0%, rgba(23, 30, 56, 0.8), rgba(31, 10, 18))", '/src/assets/hero-backgrounds/loadout_bg_outworld_004_jpg.jpeg'],
  axe: ["radial-gradient(circle at 50% 0%, rgba(49, 17, 23, 0.8), rgba(0, 0, 0))", '/src/assets/hero-backgrounds/loadout_bg_rocky_001_jpg.jpeg'],
  bane: ["radial-gradient(circle at 50% 0%, rgba(34, 29, 66, 0.8), rgba(15, 6, 14))", '/src/assets/hero-backgrounds/loadout_bg_outworld_003_jpg.jpeg'],
  batrider: ["radial-gradient(circle at 50% 0%, rgba(50, 24, 33, 0.8), rgba(10, 9, 10))", '/src/assets/hero-backgrounds/loadout_bg_forest_004_jpg.jpeg'],
  beastmaster: ["radial-gradient(circle at 50% 0%, rgba(41, 28, 28, 0.8), rgba(10, 9, 10))", '/src/assets/hero-backgrounds/loadout_bg_rocky_004_jpg.jpeg'],
  bloodseeker: ["radial-gradient(circle at 50% 0%, rgba(52, 22, 26, 0.8), rgba(10, 9, 10))",  '/src/assets/hero-backgrounds/loadout_bg_fire_001_jpg.jpeg'],
  bounty_hunter: ["radial-gradient(circle at 50% 0%, rgba(44, 20, 20, 0.8), rgba(10, 9, 9))",  '/src/assets/hero-backgrounds/loadout_bg_jungle_001_jpg.jpeg'],
  brewmaster: ["radial-gradient(circle at 50% 0%, rgba(52, 33, 24, 0.8), rgba(10, 9, 9))",  '/src/assets/hero-backgrounds/loadout_bg_forest_001_jpg.jpeg'],
  bristleback: ["radial-gradient(circle at 50% 0%, rgba(41, 28, 27, 0.8), rgba(20, 20, 10))",  '/src/assets/hero-backgrounds/loadout_bg_forest_004_jpg.jpeg'],
  broodmother: ["radial-gradient(circle at 50% 0%, rgba(21, 31, 50, 0.8), rgba(11, 10, 20))",  '/src/assets/hero-backgrounds/loadout_bg_forest_003_jpg.jpeg'],
  centaur: ["radial-gradient(circle at 50% 0%, rgba(41, 20, 23, 0.8), rgba(20, 10, 10))",  '/src/assets/hero-backgrounds/loadout_bg_rocky_004_jpg.jpeg'],
  chaos_knight: ["radial-gradient(circle at 50% 0%, rgba(45, 9, 9, 0.8), rgba(16, 16, 20))",  '/src/assets/hero-backgrounds/loadout_bg_rocky_003_jpg.jpeg'],
  chen: ["radial-gradient(circle at 50% 0%, rgba(27, 43, 58, 0.8), rgba(28, 26, 20))",  '/src/assets/hero-backgrounds/loadout_bg_rocky_002_jpg.jpeg'],
  clinkz: ["radial-gradient(circle at 50% 0%, rgba(54, 30, 26, 0.8), rgba(15, 10, 22))",  '/src/assets/hero-backgrounds/loadout_bg_fire_004_jpg.jpeg'],
  rattletrap: ["radial-gradient(circle at 50% 0%, rgba(34, 31, 46, 0.8), rgba(14, 14, 17))",  '/src/assets/hero-backgrounds/loadout_bg_field_004_jpg.jpeg'],
  crystal_maiden: ["radial-gradient(circle at 50% 0%, rgba(24, 41, 66, 0.8), rgba(10, 15, 18))",  '/src/assets/hero-backgrounds/loadout_bg_ice_003_jpg.jpeg'],
  dark_seer: ["radial-gradient(circle at 50% 0%, rgba(34, 25, 57, 0.8), rgba(17, 16, 23))",  '/src/assets/hero-backgrounds/loadout_bg_outworld_004_jpg.jpeg'],
  dark_willow: ["radial-gradient(circle at 50% 0%, rgba(57, 25, 50, 0.8), rgba(9, 18, 11))", '/src/assets/hero-backgrounds/loadout_bg_field_002_jpg.jpeg'],
  dawnbreaker: ["radial-gradient(circle at 50% 0%, rgba(38, 25, 56, 0.8), rgba(20, 14, 9))", '/src/assets/hero-backgrounds/loadout_bg_field_002_jpg.jpeg'],
  dazzle: ["radial-gradient(circle at 50% 0%, rgba(60, 26, 57, 0.8), rgba(11, 9, 20))", '/src/assets/hero-backgrounds/loadout_bg_outworld_002_jpg.jpeg'],
  death_prophet: ["radial-gradient(circle at 50% 0%, rgba(25, 42, 50, 0.8), rgba(24, 6, 13))", '/src/assets/hero-backgrounds/loadout_bg_outworld_001_jpg.jpeg'],
  disruptor: ["radial-gradient(circle at 50% 0%, rgba(27, 34, 57, 0.8), rgba(24, 6, 6))", '/src/assets/hero-backgrounds/loadout_bg_sky_001_jpg.jpeg'],
  doom_bringer: ["radial-gradient(circle at 50% 0%, rgba(50, 25, 25, 0.8), rgba(10, 11, 18))", '/src/assets/hero-backgrounds/loadout_bg_fire_003_jpg.jpeg'],
  dragon_knight: ["radial-gradient(circle at 50% 0%, rgba(63, 35, 26, 0.8), rgba(13, 14, 18))", '/src/assets/hero-backgrounds/loadout_bg_rocky_002_jpg.jpeg'],
  drow_ranger: ["radial-gradient(circle at 50% 0%, rgba(23, 31, 54, 0.8), rgba(10, 11, 18))", '/src/assets/hero-backgrounds/loadout_bg_ice_002_jpg.jpeg'],
  earth_spirit: ["radial-gradient(circle at 50% 0%, rgba(25, 53, 41, 0.8), rgba(13, 14, 19))", '/src/assets/hero-backgrounds/loadout_bg_forest_002_jpg.jpeg'],
  earthshaker: ["radial-gradient(circle at 50% 0%, rgba(50, 35, 25, 0.8), rgba(15, 8, 11))", '/src/assets/hero-backgrounds/loadout_bg_forest_001_jpg.jpeg'],
  elder_titan: ["radial-gradient(circle at 50% 0%, rgba(38, 35, 26, 0.8), rgba(10, 11, 18))", '/src/assets/hero-backgrounds/loadout_bg_rocky_004_jpg.jpeg'],
  ember_spirit: ["radial-gradient(circle at 50% 0%, rgba(45, 18, 24, 0.8), rgba(9, 5, 5))", '/src/assets/hero-backgrounds/loadout_bg_fire_002_jpg.jpeg'],
  enchantress: ["radial-gradient(circle at 50% 0%, rgba(41, 36, 49, 0.8), rgba(13, 19, 15))", '/src/assets/hero-backgrounds/loadout_bg_field_001_jpg.jpeg'],
  enigma: ["radial-gradient(circle at 50% 0%, rgba(38, 20, 44, 0.8), rgba(15, 15, 25))", '/src/assets/hero-backgrounds/loadout_bg_outworld_004_jpg.jpeg'],
  faceless_void: ["radial-gradient(circle at 50% 0%, rgba(26, 23, 50, 0.8), rgba(18, 7, 21))", '/src/assets/hero-backgrounds/loadout_bg_outworld_003_jpg.jpeg'],
  furion: ["radial-gradient(circle at 50% 0%, rgba(36, 40, 27, 0.8), rgba(15, 9, 14))", '/src/assets/hero-backgrounds/loadout_bg_forest_004_jpg.jpeg'],
  gyrocopter: ["radial-gradient(circle at 50% 0%, rgba(30, 19, 45, 0.8), rgba(15, 19, 24))", '/src/assets/hero-backgrounds/loadout_bg_sky_004_jpg.jpeg'],
  huskar: ["radial-gradient(circle at 50% 0%, rgba(25, 42, 50, 0.8), rgba(12, 8, 8))", '/src/assets/hero-backgrounds/loadout_bg_rocky_001_jpg.jpeg'],
  invoker: ["radial-gradient(circle at 50% 0%, rgba(38, 21, 41, 0.8), rgba(18, 8, 15))", '/src/assets/hero-backgrounds/loadout_bg_sky_004_jpg.jpeg'],
  jakiro: ["radial-gradient(circle at 50% 0%, rgba(46, 29, 45, 0.8), rgba(11, 9, 15))", '/src/assets/hero-backgrounds/loadout_bg_ice_004_jpg.jpeg'],
  juggernaut: ["radial-gradient(circle at 50% 0%, rgba(38, 31, 36, 0.8), rgba(10, 9, 13))", '/src/assets/hero-backgrounds/loadout_bg_sky_003_jpg.jpeg'],
  keeper_of_the_light: ["radial-gradient(circle at 50% 0%, rgba(46, 21, 52, 0.8), rgba(19, 16, 25))", '/src/assets/hero-backgrounds/loadout_bg_field_002_jpg.jpeg'],
  kunkka: ["radial-gradient(circle at 50% 0%, rgba(20, 52, 66, 0.8), rgba(15, 8, 21))", '/src/assets/hero-backgrounds/loadout_bg_water_004_jpg.jpeg'],
  legion_commander: ["radial-gradient(circle at 50% 0%, rgba(50, 25, 32, 0.8), rgba(11, 9, 21))", '/src/assets/hero-backgrounds/loadout_bg_rocky_003_jpg.jpeg'],
  leshrac: ["radial-gradient(circle at 50% 0%, rgba(17, 41, 56, 0.8), rgba(12, 14, 21))", '/src/assets/hero-backgrounds/loadout_bg_ice_001_jpg.jpeg'],
  lich: ["radial-gradient(circle at 50% 0%, rgba(19, 25, 41, 0.8), rgba(10, 12, 17))", '/src/assets/hero-backgrounds/loadout_bg_ice_002_jpg.jpeg'],
  life_stealer: ["radial-gradient(circle at 50% 0%, rgba(45, 21, 31, 0.8), rgba(15, 9, 13))", '/src/assets/hero-backgrounds/loadout_bg_rocky_004_jpg.jpeg'],
  lina: ["radial-gradient(circle at 50% 0%, rgba(50, 19, 25, 0.8), rgba(15, 10, 15))", '/src/assets/hero-backgrounds/loadout_bg_fire_001_jpg.jpeg'],
  lion: ["radial-gradient(circle at 50% 0%, rgba(26, 24, 52, 0.8), rgba(8, 11, 17))", '/src/assets/hero-backgrounds/loadout_bg_forest_003_jpg.jpeg'],
  lone_druid: ["radial-gradient(circle at 50% 0%, rgba(23, 33, 43, 0.8), rgba(10, 11, 19))", '/src/assets/hero-backgrounds/loadout_bg_jungle_003_jpg.jpeg'],
  luna: ["radial-gradient(circle at 50% 0%, rgba(46, 22, 46, 0.8), rgba(19, 15, 26))", '/src/assets/hero-backgrounds/loadout_bg_ice_003_jpg.jpeg'],
  lycan: ["radial-gradient(circle at 50% 0%, rgba(45, 32, 25, 0.8), rgba(15, 10, 15))", '/src/assets/hero-backgrounds/loadout_bg_forest_003_jpg.jpeg'],
  magnataur: ["radial-gradient(circle at 50% 0%, rgba(33, 18, 40, 0.8), rgba(19, 13, 16))", '/src/assets/hero-backgrounds/loadout_bg_forest_002_jpg.jpeg'],
  medusa: ["radial-gradient(circle at 50% 0%, rgba(36, 28, 50, 0.8), rgba(10, 9, 13))", '/src/assets/hero-backgrounds/loadout_bg_jungle_004_jpg.jpeg'],
  meepo: ["radial-gradient(circle at 50% 0%, rgba(42, 32, 45, 0.8), rgba(11, 12, 21))", '/src/assets/hero-backgrounds/loadout_bg_field_001_jpg.jpeg'],
  mirana: ["radial-gradient(circle at 50% 0%, rgba(43, 22, 48, 0.8), rgba(12, 10, 17))", '/src/assets/hero-backgrounds/loadout_bg_ice_004_jpg.jpeg'],
  monkey_king: ["radial-gradient(circle at 50% 0%, rgba(32, 34, 51, 0.8), rgba(18, 15, 21))", '/src/assets/hero-backgrounds/loadout_bg_jungle_002_jpg.jpeg'],
  morphling: ["radial-gradient(circle at 50% 0%, rgba(29, 51, 70, 0.8), rgba(14, 12, 16))", '/src/assets/hero-backgrounds/loadout_bg_water_003_jpg.jpeg'],
  muerta: ["radial-gradient(circle at 50% 0%, rgba(29, 46, 58, 0.8), rgba(10, 14, 21))", '/src/assets/hero-backgrounds/loadout_bg_outworld_001_jpg.jpeg'],
  naga_siren: ["radial-gradient(circle at 50% 0%, rgba(45, 25, 42, 0.8), rgba(14, 10, 14))", '/src/assets/hero-backgrounds/loadout_bg_water_001_jpg.jpeg'],
  necrolyte: ["radial-gradient(circle at 50% 0%, rgba(26, 35, 47, 0.8), rgba(14, 12, 16))", '/src/assets/hero-backgrounds/loadout_bg_outworld_002_jpg.jpeg'],
  night_stalker: ["radial-gradient(circle at 50% 0%, rgba(35, 21, 40, 0.8), rgba(11, 14, 19))", '/src/assets/hero-backgrounds/loadout_bg_outworld_002_jpg.jpeg'],
  nyx_assassin: ["radial-gradient(circle at 50% 0%, rgba(27, 23, 46, 0.8), rgba(19, 12, 17))", '/src/assets/hero-backgrounds/loadout_bg_sky_003_jpg.jpeg'],
  ogre_magi: ["radial-gradient(circle at 50% 0%, rgba(37, 17, 40, 0.8), rgba(12, 10, 18))", '/src/assets/hero-backgrounds/loadout_bg_forest_002_jpg.jpeg'],
  omniknight: ["radial-gradient(circle at 50% 0%, rgba(52, 32, 36, 0.8), rgba(12, 11, 15))", '/src/assets/hero-backgrounds/loadout_bg_field_001_jpg.jpeg'],
  oracle: ["radial-gradient(circle at 50% 0%, rgba(28, 29, 50, 0.8), rgba(11, 10, 18))", '/src/assets/hero-backgrounds/loadout_bg_sky_002_jpg.jpeg'],
  obsidian_destroyer: ["radial-gradient(circle at 50% 0%, rgba(32, 50, 52, 0.8), rgba(17, 9, 15))", '/src/assets/hero-backgrounds/loadout_bg_outworld_001_jpg.jpeg'],
  pangolier: ["radial-gradient(circle at 50% 0%, rgba(29, 28, 43, 0.8), rgba(11, 11, 18))", '/src/assets/hero-backgrounds/loadout_bg_forest_001_jpg.jpeg'],
  phantom_assassin: ["radial-gradient(circle at 50% 0%, rgba(24, 22, 53, 0.8), rgba(11, 11, 16))", '/src/assets/hero-backgrounds/loadout_bg_outworld_002_jpg.jpeg'],
  phantom_lancer: ["radial-gradient(circle at 50% 0%, rgba(37, 22, 49, 0.8), rgba(16, 16, 22))", '/src/assets/hero-backgrounds/loadout_bg_jungle_001_jpg.jpeg'],
	phoenix: ["radial-gradient(circle at 50% 0%, rgba(57, 35, 26, 0.8), rgba(17, 13, 26))", '/src/assets/hero-backgrounds/loadout_bg_sky_003_jpg.jpeg'],
  primal_beast: ["radial-gradient(circle at 50% 0%, rgba(44, 41, 30, 0.8), rgba(17, 13, 26))", '/src/assets/hero-backgrounds/loadout_bg_rocky_003_jpg.jpeg'],
  puck: ["radial-gradient(circle at 50% 0%, rgba(32, 25, 50, 0.8), rgba(17, 16, 23))", '/src/assets/hero-backgrounds/loadout_bg_outworld_001_jpg.jpeg'],
  pudge: ["radial-gradient(circle at 50% 0%, rgba(40, 37, 26, 0.8), rgba(17, 16, 23))", '/src/assets/hero-backgrounds/loadout_bg_jungle_004_jpg.jpeg'],
  pugna: ["radial-gradient(circle at 50% 0%, rgba(28, 40, 26, 0.8), rgba(17, 16, 23))", '/src/assets/hero-backgrounds/loadout_bg_outworld_004_jpg.jpeg'],
  queenofpain: ["radial-gradient(circle at 50% 0%, rgba(40, 26, 26, 0.8), rgba(17, 16, 23))", '/src/assets/hero-backgrounds/loadout_bg_fire_003_jpg.jpeg'],
  razor: ["radial-gradient(circle at 50% 0%, rgba(27, 32, 49, 0.8), rgba(17, 16, 23))", '/src/assets/hero-backgrounds/loadout_bg_sky_002_jpg.jpeg'],
  riki: ["radial-gradient(circle at 50% 0%, rgba(27, 32, 49, 0.8), rgba(17, 16, 23))", '/src/assets/hero-backgrounds/loadout_bg_outworld_004_jpg.jpeg'],
  rubick: ["radial-gradient(circle at 50% 0%, rgba(24, 45, 40, 0.8), rgba(17, 16, 23))", '/src/assets/hero-backgrounds/loadout_bg_outworld_003_jpg.jpeg'],
  sand_king: ["radial-gradient(circle at 50% 0%, rgba(44, 37, 31, 0.8), rgba(23, 16, 16))", '../assets/hero-backgrounds/loadout_bg_rocky_003_jpg.jpeg'],
  shadow_demon: ["radial-gradient(circle at 50% 0%, rgba(44, 26, 31, 0.8), rgba(23, 16, 16))", '/src/assets/hero-backgrounds/loadout_bg_fire_002_jpg.jpeg'],
  nevermore: ["radial-gradient(circle at 50% 0%, rgba(39, 9, 9, 0.8), rgba(9, 5, 5))", '../assets/hero-backgrounds/loadout_bg_fire_004_jpg.jpeg'],
  shadow_shaman: ["radial-gradient(circle at 50% 0%, rgba(39, 29, 9, 0.8), rgba(14, 9, 9))", '/src/assets/hero-backgrounds/loadout_bg_rocky_002_jpg.jpeg'],
  silencer: ["radial-gradient(circle at 50% 0%, rgba(34, 20, 37, 0.8), rgba(23, 17, 17))", '/src/assets/hero-backgrounds/loadout_bg_sky_001_jpg.jpeg'],
  skywrath_mage: ["radial-gradient(circle at 50% 0%, rgba(40, 51, 66, 0.8), rgba(2, 2, 2))", '/src/assets/hero-backgrounds/loadout_bg_sky_001_jpg.jpeg'],
  slardar: ["radial-gradient(circle at 50% 0%, rgba(45, 40, 66, 0.8), rgba(17, 12, 20))", '/src/assets/hero-backgrounds/loadout_bg_water_001_jpg.jpeg'],
  slark: ["radial-gradient(circle at 50% 0%, rgba(26, 35, 57, 0.8), rgba(6, 4, 11))", '/src/assets/hero-backgrounds/loadout_bg_water_001_jpg.jpeg'],
  snapfire: ["radial-gradient(circle at 50% 0%, rgba(58, 29, 24, 0.8), rgba(11, 4, 4))", '/src/assets/hero-backgrounds/loadout_bg_field_003_jpg.jpeg'],
  sniper: ["radial-gradient(circle at 50% 0%, rgba(52, 27, 33, 0.8), rgba(11, 4, 4))", '/src/assets/hero-backgrounds/loadout_bg_field_001_jpg.jpeg'],
  spectre: ["radial-gradient(circle at 50% 0%, rgba(25, 23, 53, 0.8), rgba(11, 4, 4))", '/src/assets/hero-backgrounds/loadout_bg_outworld_001_jpg.jpeg'],
  spirit_breaker: ["radial-gradient(circle at 50% 0%, rgba(26, 35, 57, 0.8), rgba(6, 4, 11))", '/src/assets/hero-backgrounds/loadout_bg_rocky_001_jpg.jpeg'],
  storm_spirit: ["radial-gradient(circle at 50% 0%, rgba(31, 27, 49, 0.8), rgba(9, 4, 11))", '/src/assets/hero-backgrounds/loadout_bg_sky_002_jpg.jpeg'],
  sven: ["radial-gradient(circle at 50% 0%, rgba(26, 34, 57, 0.8), rgba(9, 4, 11))", '/src/assets/hero-backgrounds/loadout_bg_ice_001_jpg.jpeg'],
  techies: ["radial-gradient(circle at 50% 0%, rgba(49, 39, 34, 0.8), rgba(9, 4, 11))", '/src/assets/hero-backgrounds/loadout_bg_field_001_jpg.jpeg'],
  templar_assassin: ["radial-gradient(circle at 50% 0%, rgba(44, 34, 49, 0.8), rgba(9, 4, 11))", '/src/assets/hero-backgrounds/loadout_bg_outworld_004_jpg.jpeg'],
  terrorblade: ["radial-gradient(circle at 50% 0%, rgba(36, 22, 44, 0.8), rgba(6, 18, 13))", '/src/assets/hero-backgrounds/loadout_bg_outworld_003_jpg.jpeg'],
  tidehunter: ["radial-gradient(circle at 50% 0%, rgba(22, 59, 57, 0.8), rgba(6, 18, 13))", '/src/assets/hero-backgrounds/loadout_bg_water_002_jpg.jpeg'],
  shredder: ["radial-gradient(circle at 50% 0%, rgba(59, 28, 22, 0.8), rgba(6, 18, 13))", '/src/assets/hero-backgrounds/loadout_bg_field_002_jpg.jpeg'],
  tinker: ["radial-gradient(circle at 50% 0%, rgba(49, 40, 27, 0.8), rgba(6, 18, 13))", '/src/assets/hero-backgrounds/loadout_bg_field_003_jpg.jpeg'],
  tiny: ["radial-gradient(circle at 50% 0%, rgba(32, 40, 47, 0.8), rgba(6, 18, 13))", '/src/assets/hero-backgrounds/loadout_bg_forest_004_jpg.jpeg'],
  treant: ["radial-gradient(circle at 50% 0%, rgba(34, 47, 32, 0.8), rgba(6, 18, 13))", '/src/assets/hero-backgrounds/loadout_bg_forest_003_jpg.jpeg'],
  troll_warlord: ["radial-gradient(circle at 50% 0%, rgba(51, 28, 27, 0.8), rgba(6, 18, 13))", '/src/assets/hero-backgrounds/loadout_bg_forest_002_jpg.jpeg'],
  tusk: ["radial-gradient(circle at 50% 0%, rgba(32, 46, 72, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_ice_002_jpg.jpeg'],
  abyssal_underlord: ["radial-gradient(circle at 50% 0%, rgba(22, 44, 39, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_outworld_002_jpg.jpeg'],
  undying: ["radial-gradient(circle at 50% 0%, rgba(22, 44, 39, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_rocky_001_jpg.jpeg'],
  ursa: ["radial-gradient(circle at 50% 0%, rgba(35, 39, 45, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_forest_001_jpg.jpeg'],
  vengefulspirit: ["radial-gradient(circle at 50% 0%, rgba(25, 28, 59, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_sky_001_jpg.jpeg'],
  venomancer: ["radial-gradient(circle at 50% 0%, rgba(38, 37, 59, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_jungle_003_jpg.jpeg'],
  viper: ["radial-gradient(circle at 50% 0%, rgba(28, 52, 44, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_jungle_001_jpg.jpeg'],
  visage: ["radial-gradient(circle at 50% 0%, rgba(38, 35, 22, 0.8), rgba(10, 6, 18)", '/src/assets/hero-backgrounds/loadout_bg_ice_003_jpg.jpeg'],
  void_spirit: ["radial-gradient(circle at 50% 0%, rgba(33, 21, 42, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_outworld_002_jpg.jpeg'],
  warlock: ["radial-gradient(circle at 50% 0%, rgba(32, 32, 38, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_fire_001_jpg.jpeg'],
  weaver: ["radial-gradient(circle at 50% 0%, rgba(39, 45, 49, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_jungle_002_jpg.jpeg'],
  windrunner: ["radial-gradient(circle at 50% 0%, rgba(35, 46, 30, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_field_004_jpg.jpeg'],
  winter_wyvern: ["radial-gradient(circle at 50% 0%, rgba(35, 46, 30, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_ice_004_jpg.jpeg'],
  witch_doctor: ["radial-gradient(circle at 50% 0%, rgba(30, 30, 41, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_jungle_001_jpg.jpeg'],
  skeleton_king: ["radial-gradient(circle at 50% 0%, rgba(22, 48, 56, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_outworld_002_jpg.jpeg'],
  zuus: ["radial-gradient(circle at 50% 0%, rgba(29, 28, 45, 0.8), rgba(10, 6, 18))", '/src/assets/hero-backgrounds/loadout_bg_outworld_001_jpg.jpeg'],
  grimstroke: ["radial-gradient(circle at 50% 0%, rgba(25, 42, 50, 0.8), rgba(18, 10, 10))", '/src/assets/hero-backgrounds/loadout_bg_outworld_003_jpg.jpeg'],
  marci: ["radial-gradient(circle at 50% 0%, rgba(32, 31, 49, 0.8), rgba(13, 14, 19))", '/src/assets/hero-backgrounds/loadout_bg_field_003_jpg.jpeg'],
  mars: ["radial-gradient(circle at 50% 0%, rgba(40, 20, 23, 0.8), rgba(19, 17, 13))", '/src/assets/hero-backgrounds/loadout_bg_rocky_002_jpg.jpeg'],
  hoodwink: ["radial-gradient(circle at 50% 0%, rgba(50, 42, 32, 0.8), rgba(18, 10, 10)", '/src/assets/hero-backgrounds/loadout_bg_field_004_jpg.jpeg']
};

export default heroLoadoutBackground;