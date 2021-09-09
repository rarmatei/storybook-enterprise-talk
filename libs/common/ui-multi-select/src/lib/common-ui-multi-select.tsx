import React from 'react';
import './common-ui-multi-select.module.css';
import { Checkbox, FormControl, FormLabel, Stack } from '@chakra-ui/react';

export interface CommonUiMultiSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export function CommonUiMultiSelect(props: CommonUiMultiSelectProps) {
  return (
    <FormControl name={props.name} my={4}>
      <FormLabel fontWeight="bold" htmlFor={props.name}>
        {props.label}
      </FormLabel>
      <Stack pl={6} mt={1} spacing={1}>
        {props.options.map((option) => (
          <Checkbox key={option.value} name={props.name} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Stack>
    </FormControl>
  );
}

export default CommonUiMultiSelect;
