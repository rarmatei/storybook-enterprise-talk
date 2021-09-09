import React from 'react';

import './common-ui-input.module.css';
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';

export interface CommonUiInputProps {
  name: string;
  label: string;
  type?: string;
}

export function CommonUiInput(props: CommonUiInputProps) {
  return (
    <FormControl name={props.name} my={4}>
      <FormLabel fontWeight="bold" htmlFor={props.name}>
        {props.label}
      </FormLabel>
      <Input id={props.name} placeholder={props.label} {...props} />
    </FormControl>
  );
}

export default CommonUiInput;
