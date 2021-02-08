import React from 'react';
import { Wrapper, Form, FormItem } from './AddTransactionStyle';
import { Input, Text } from '..';

const AddTransaction = () => {
  return (
    <Wrapper>
      <Text size='lg'>Add items</Text>
      <Form>
        <FormItem>
          <Input label='Text' />
          <Input label='Amount' />
        </FormItem>
      </Form>
    </Wrapper>
  );
};

export default AddTransaction;
