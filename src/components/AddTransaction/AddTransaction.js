import React, { useState } from 'react';
import { Wrapper, Form, FormItem } from './AddTransactionStyle';
import { Button, Input, Text } from '..';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <Wrapper>
      <Text size='lg'>Add items</Text>
      <Form>
        <FormItem>
          <Input
            label='Text'
            value={text}
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
