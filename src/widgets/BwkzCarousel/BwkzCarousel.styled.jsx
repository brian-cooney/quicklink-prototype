import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';

export const BwkzCarousel = styled.div`
  .slick-arrow {
    position: absolute;
    top: calc(50% - ${props => props.offset / 2}px);

    transform: translateY(-50%);

    &.slick-prev {
      left: 0;
    }

    &.slick-next {
      right: 0;
    }
  }

  .slick-dots {
    box-sizing: border-box;
    display: flex !important;
    justify-content: ${props => props.dotsHorizontalPosition};

    position: absolute;
    bottom: 15px;

    width: 100%;

    list-style-type: none;
    overflow: hidden;

    padding: 0 15px;
    margin: 0;

    text-align: center;

    li {
      cursor: pointer;

      opacity: 0.5;

      button {
        border: 0;

        background: none;
        color: ${props => props.dotsInactiveColor};
        font-size: 0;

        outline: none;
        cursor: pointer;

        &::before {
          content: '';

          display: inline-block;

          border: 1px solid ${props => props.dotsActiveColor};

          background: ${props => props.dotsInactiveColor};
          cursor: pointer;
        }
      }

      &.slick-active {
        opacity: 1;

        button {
          color: ${props => props.dotsActiveColor};

          &::before {
            background: ${props => props.dotsActiveColor};
          }

          &::after {
            opacity: 0.5;
          }
        }
      }
    }

    &.type {
      &-bars {
        li {
          button {
            &::before {
              width: 35px;
              height: 7px;
            }
          }
        }
      }

      &-dots {
        li {
          button {
            &::before {
              width: 15px;
              height: 15px;

              border-radius: 100%;
            }
          }
        }
      }

      &-tabs {
        li {
          button {
            font-size: ${props => props.dotsFontSize};

            padding: 0 0 0 7px;

            &::before {
              display: none;
            }

            &::after {
              content: '|';

              padding-left: 7px;
            }
          }

          &:last-child {
            button {
              &::after {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;

export const BwkzCarouselDot = styled.button`
`;
