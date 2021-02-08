import React from 'react';
import { Text } from '..';
import { Wrapper, Content } from './IncomeExpensesStyle';

const IncomeExpenses = () => {
  return (
    <Wrapper>
      <Content>
        <Text>Income</Text>
        <Text>+0.00$</Text>
      </Content>
      <Content>
        <Text>Expense</Text>
        <Text>-0.00$</Text>
      </Content>
    </Wrapper>
  );
};

export default IncomeExpenses;
