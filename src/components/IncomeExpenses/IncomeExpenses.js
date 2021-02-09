import React, { useContext } from 'react';
import { Text } from '..';
import { Wrapper, Content } from './IncomeExpensesStyle';
import { GlobalContext } from '../../context/GlobalState';

const IncomeExpenses = () => {
  const { transacitons } = useContext(GlobalContext);
  const amounts = transacitons.map((transaciton) => transaciton.amount);

  console.log(amounts);

  let income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  let expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <Wrapper>
      <Content>
        <Text>Income</Text>
        <Text color='green'>{income}$</Text>
      </Content>
      <Content>
        <Text>Expense</Text>
        <Text color='coral'>{expense}$</Text>
      </Content>
    </Wrapper>
  );
};

export default IncomeExpenses;
