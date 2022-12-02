import { Button, HStack, useNumberInput } from '@chakra-ui/react';
import React from 'react';
import { TextInputField } from './text-input';

export const QuantityField = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1.53,
    min: 0,
    max: 6,
    precision: 2
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="320px">
      <Button {...inc}>+</Button>
      <TextInputField {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};
