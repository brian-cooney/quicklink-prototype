const transformHorizontalPositionToFlex = (horizontalPosition) => {
  switch (horizontalPosition) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
};

export default {
  transformHorizontalPositionToFlex,
};
