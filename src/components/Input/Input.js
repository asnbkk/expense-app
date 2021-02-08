import React from 'react';
import { InputWrapper, InputStyle } from './InputStyle';
import { Text } from '..';

const Input = ({ label, value, placeholder, onChange }) => {
  return (
    <InputWrapper>
      <Text margin='0 0 3px 0' size='sm'>
        {label}
      </Text>
      <InputStyle placeholder={placeholder} value={value} onChange={onChange} />
    </InputWrapper>
  );
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  onChange: () => {},
  margin: '0px',
};

export default Input;
