import styled from 'styled-components'


const HeroContainer = styled('div').withConfig({
     shouldForwardProp: (prop) => !['bg'].includes(prop),
   })<{bg: string}>`
  display: flex;
  justify-content: center;
  height: 100%;
  &::before {
    background-size: cover;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => props.bg};
    filter: blur(6px) saturate(1.3);
    z-index: -1;
  }
`;
export default HeroContainer
