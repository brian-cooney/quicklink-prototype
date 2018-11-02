import styled from 'styled-components/macro';

export const BwkzQuickLinksFullImage = styled.div`
  background-color: ${props => props.backgroundColor};
  background-image: ${props =>
    props.backgroundImage && `url(${props.backgroundImage})`};
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const UlFullImage = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 1500px;
`;

export const LiFullImage = styled.li`
  display: flex;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 25%;
  }
`;

export const BwkzQuickLinksCardFullImage = styled.div`
  background-image: ${props =>
    props.backgroundImage && `url(${props.backgroundImage})`};
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

export const BwkzQuickLinksImageFullImage = styled.div`
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
    padding-top: 100%;
  }
`;

export const BwkzQuickLinksCardContentFullImage = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

export const BwkzQuickLinksCardTitleFullImage = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-weight: 600;
`;

export const BwkzQuickLinksCardTextFullImage = styled.p`
  flex: 0 0 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: ${props => props.color};
`;
