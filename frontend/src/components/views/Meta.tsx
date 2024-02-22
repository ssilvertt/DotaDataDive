import TabsComponent from '../ui/HeroMeta/TabsComponent/TabsComponent';
import {styled, createGlobalStyle} from 'styled-components';
import bg from '@/assets/generic_hero_background_png.png';


const BackgroundImageLink = styled.div`
  background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/outlanders/patch-notes/bg_repeater.jpg');
`;



const Meta = () => {
	return (
		<BackgroundImageLink>
			<TabsComponent />
		</BackgroundImageLink>
	);
};

export default Meta;
