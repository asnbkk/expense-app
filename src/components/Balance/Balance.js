import React from 'react';
import { Wrapper } from './BalanceStyle';
import { Text } from '..';

const Balance = () => {
  return (
    <Wrapper>
      <Text>Your balance is</Text>
      <Text size='2xl'>10.00$</Text>
    </Wrapper>
  );
};

export default Balance;
