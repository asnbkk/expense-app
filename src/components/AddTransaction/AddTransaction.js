import React, { useState, useContext } from 'react';
import { Wrapper, Form, FormItem } from './AddTransactionStyle';
import { Button, Input, Text } from '..';
import { GlobalContext } from '../../context/GlobalState';
import { v1 as uuid } from 'uuid';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      text,
      amount: parseInt(amount),
    };

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <Wrapper>
      <Text size='lg'>Add items</Text>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <Input
            label='Text'
            value={text}
            placeholder='Enter transaction name'
            onChange={(e) => setText(e.target.value)}
          />
          <Input
            label='Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormItem>
        <Button>Add transaciton</Button>
      </Form>
    </Wrapper>
  );
};

export default AddTransaction;
