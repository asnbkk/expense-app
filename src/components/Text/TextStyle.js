import styled from 'styled-components';

const fontSizes = {
  sm: '14px',
  md: '16px',
  lg: `18px`,
  xl: `20px`,
  '2xl': `25px`,
};

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const TextStyle = styled.div`
  font-weight: ${({ weight }) => weight && fontWeights[weight]};
  font-size: ${({ size }) => size && fontSizes[size]};
  margin: ${({ margin }) => margin ?? '0px'};
  color: ${({ color }) => color};
`;

export default TextStyle;
