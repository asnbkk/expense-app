import React, { useContext } from 'react';
import { Wrapper } from './TransactionCardStyle';
import { Text } from '..';
import { GlobalContext } from '../../context/GlobalState';

const TransactionCard = ({ transaction: { text, amount, id } }) => {
  let sign = amount < 0 ? '-' : '+';
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <Wrapper onClick={() => deleteTransaction(id)} sign={sign}>
      <Text>{text}</Text>
      <Text>
        {sign}
        {Math.abs(amount)}$
      </Text>
    </Wrapper>
  );
};

export default TransactionCard;
