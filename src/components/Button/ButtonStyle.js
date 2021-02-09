import styled from 'styled-components';
import Button from './Button';

const ButtonStyle = styled.button`
  height: 40px;
  background: #f0f0f0;
  border: none;
  outline: none;
  cursor: pointer;
  display: grid;
  align-items: center;
  font-size: 16px;
  padding: 0 1rem;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export default ButtonStyle;
