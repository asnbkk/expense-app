import React from 'react';
import { InputWrapper, Label, InputStyle } from './InputStyle';
import { Text } from '..';

const Input = ({ label, value, placeholder, onChange, margin }) => {
  return (
    <InputWrapper>
      <Label>
        <Text size='sm'>{label}</Text>
      </Label>
      <InputStyle />
    </InputWrapper>
  );
};

export default Input;
