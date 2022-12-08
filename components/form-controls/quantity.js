import { Button, HStack, useNumberInput } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { TextInputField } from './text-input';

export const QuantityField = forwardRef((props, ref) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 0,
    max: 6,
    precision: 0
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="320px">
      <Button {...dec}>-</Button>
      <TextInputField
        {...input}
        {...props}
      />
      <Button {...inc}>+</Button>
    </HStack>
  );
});
QuantityField.displayName = 'QuantityField';
