import React from 'react';
import TextStyle from './TextStyle';

const Text = ({ children, weight, size, margin }) => {
  return (
    <TextStyle weight={weight} size={size} margin={margin}>
      {children}
    </TextStyle>
  );
};

Text.defaultProps = {
  children: null,
  weight: 'regular',
  size: 'md',
  margin: '0px',
};

export default Text;
