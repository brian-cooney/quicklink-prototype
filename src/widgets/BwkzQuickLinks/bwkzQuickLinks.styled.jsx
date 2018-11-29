import styled from 'styled-components/macro';

export const BwkzQuickLinks = styled.div`
  background-color: ${props => props.backgroundColor};
  background-image: ${props => props.backgroundImage && `url(${props.backgroundImage})`};
`;

export const BwkzQuickLinksRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 1500px;
  justify-content: center;
`;

export const BwkzQuickLinksCol = styled.li`
  display: flex;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: ${props => props.cardItemWidth};
  }
  @media (min-width: 56rem) {
    width: ${props => props.cardItemWidth};
  }
`;

export const BwkzQuickLinksCard = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: ${props => props.boxshadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

export const BwkzQuickLinksCardFullImage = styled.div`
  background-image: ${props => props.backgroundImage && `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: ${props => props.boxshadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: ${props => props.cardItemHeight};
`;

export const BwkzQuickLinksImage = styled.div`
  background-image: ${props => props.backgroundImage && `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  ::before {
    content: '';
    display: block;
    padding-top: ${props => props.imagePaddingHeight};
  }
`;

export const BwkzQuickLinksFullImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  ::before {
    content: '';
    display: block;
    padding-top: ${props => props.imagePaddingHeight};
  }
`;

export const BwkzQuickLinksCardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0.2em;
  h2 {
    margin-top: 0;
  }
`;

export const BwkzQuickLinksCardTitle = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-weight: 600;
  color: ${props => props.headingColor};
`;

export const BwkzQuickLinksCardText = styled.div`
  flex: 0 0 auto;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: ${props => props.descriptionColour};
`;
