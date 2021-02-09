import React from 'react';
import { Wrapper } from './TransactionCardStyle';
import { Text } from '..';

const TransactionCard = ({ transaction: { text, amount } }) => {
  let sign = amount < 0 ? '-' : '+';

  return (
    <Wrapper sign={sign}>
      <Text>{text}</Text>
      <Text>
        {sign}
        {Math.abs(amount)}$
      </Text>
    </Wrapper>
  );
};

export default TransactionCard;
