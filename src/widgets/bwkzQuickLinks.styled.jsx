import styled from 'styled-components/macro';

export const BwkzQuickLinks = styled.div`
  background-color: ${props => props.backgroundColor};
  background-image: ${props =>
    props.backgroundImage && `url(${props.backgroundImage})`};
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
`;

export const Li = styled.li`
  display: flex;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 25%;
  }
`;

export const BwkzQuickLinksCard = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const BwkzQuickLinksImage = styled.div`
  background-image: ${props =>
    props.backgroundImage && `url(${props.backgroundImage})`};
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
    padding-top: 66.25%;
  }
`;

export const BwkzQuickLinksCardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

export const BwkzQuickLinksCardTitle = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

export const BwkzQuickLinksCardText = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: ${props => props.color};
`;
