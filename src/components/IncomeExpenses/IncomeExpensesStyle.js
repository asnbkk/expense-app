import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: gray;
  grid-gap: 1px;
  border: 1px solid gray;
`;

export const Content = styled.div`
  display: grid;
  padding: 1rem;
  background: white;
  justify-content: center;
`;
