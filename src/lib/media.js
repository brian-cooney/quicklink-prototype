import { css } from 'styled-components';

const screens = {
  desktop: 992,
  tablet: 440,
};

export default Object.keys(screens).reduce((accumulator, label) => {
  const newAccumulator = accumulator;

  newAccumulator[label] = (...args) => css`
    @media (min-width: ${screens[label]}px) {
      ${css(...args)}
    }
  `;
  return newAccumulator;
}, {});
