import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 30px;
  align-items: center;
  border-right: 5px solid lightgreen;
  padding-right: 1rem;

  ${({ sign }) =>
    sign == '-' &&
    `
    border-right-color: coral;
  `}
`;
