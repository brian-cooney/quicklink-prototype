import styled from 'styled-components';

export const BwkzCarouselSlide = styled.div`
  position: relative;

  ${props => (props.bodyHorizontalPosition !== 'middle') && `
    padding-right: 10%;
    padding-left: 10%;
  `};
  padding-bottom: ${props => props.offset}px;

  outline: none;
`;

export const BwkzCarouselSlideInner = styled.div`
  display: block;
  min-height: ${props => props.minHeight};

  background-color: ${props => props.backgroundColor};
  background-image: ${props => props.backgroundImage && `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;

  cursor: pointer;
`;

export const BwkzCarouselSlideBody = styled.div`
  position: absolute;
  top: calc(50% - ${props => props.offset / 2}px);
  ${props => props.position === 'left' && 'left: 0'};
  ${props => props.position === 'right' && 'right: 0'};
  ${props => props.position === 'middle' && 'left: 50%'};
  transform: translateY(-50%) ${props => (props.position === 'middle') && "translateX(-50%)"};

  max-width: 50%;

  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.25);

  background-color: ${props => props.bodyBackgroundColor || 'rgba(0, 0, 0, 0.5)'};
  color: #fff;

  & > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const BwkzCarouselSlideCta = styled.div`
  position: absolute;
  bottom: 70px;

  ${props => props.position === 'left' && 'left: 15px;'};
  ${props => props.position === 'right' && 'right: 15px;'};
  ${props => props.position === 'middle' && 'left: 50%;'};
  transform: ${props => (props.position === 'middle') && "translateX(-50%)"};
`;
