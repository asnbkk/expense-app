import React, { useContext } from 'react';
import { Wrapper } from './BalanceStyle';
import { Text } from '..';
import { GlobalContext } from '../../context/GlobalState';

const Balance = () => {
  const { transacitons } = useContext(GlobalContext);
  const amounts = transacitons.map((transaciton) => transaciton.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Wrapper>
      <Text>Your balance is</Text>
      <Text size='2xl'>{total}$</Text>
    </Wrapper>
  );
};

export default Balance;
