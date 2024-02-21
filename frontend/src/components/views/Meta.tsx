import TabsComponent from '../ui/HeroMeta/TabsComponent/TabsComponent';
import styled from 'styled-components';

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
