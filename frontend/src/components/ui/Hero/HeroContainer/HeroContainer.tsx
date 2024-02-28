import styled from 'styled-components';

interface HeroContainerProps {
  $bg: string; 
}

const HeroContainer = styled.div<HeroContainerProps>` 
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column; 
  }

  &:before {
    background-size: cover;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) => props.$bg};
    filter: blur(6px) saturate(1.3);
    z-index: -1;
  }
`;

export default HeroContainer;
