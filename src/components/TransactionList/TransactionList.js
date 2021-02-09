import React, { useContext } from 'react';
import { Wrapper, List } from './TransactionListStyle';
import { Text, TransactionCard } from '..';
import { GlobalContext } from '../../context/GlobalState';

const TransactionList = () => {
  const { transacitons } = useContext(GlobalContext);
  const _transactions = transacitons.map((item) => {
    return <TransactionCard transaction={item} key={item.id} />;
  });

  return (
    <Wrapper>
      <Text size='lg'>History</Text>
      <List>{_transactions}</List>
    </Wrapper>
  );
};

export default TransactionList;
