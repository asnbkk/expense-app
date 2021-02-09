import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 30px;
  align-items: center;
  border-right: 5px solid lightgreen;
  padding-right: 1rem;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }

  &:active {
    opacity: 0.6;
  }

  ${({ sign }) =>
    sign == '-' &&
    `
    border-right-color: coral;
  `}
`;
