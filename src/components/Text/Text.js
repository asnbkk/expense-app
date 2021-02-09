import React from 'react';
import TextStyle from './TextStyle';

const Text = ({ children, weight, size, margin, color }) => {
  return (
    <TextStyle color={color} weight={weight} size={size} margin={margin}>
      {children}
    </TextStyle>
  );
};

Text.defaultProps = {
  children: null,
  weight: 'regular',
  size: 'md',
  margin: '0px',
  color: '#000',
};

export default Text;
