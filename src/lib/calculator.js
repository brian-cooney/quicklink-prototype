const calculateVerticalPadding = (realHeight, customHeight) => {
  const intRealHeight = parseInt(realHeight, 10);
  const intCustomHeight = parseInt(customHeight, 10);

  const heightToCalculate = (intCustomHeight >= intRealHeight)
    ? (intCustomHeight - intRealHeight)
    : intRealHeight;
  const verticalPadding = heightToCalculate / 2;

  return verticalPadding;
};


export default {
  calculateVerticalPadding,
};
