import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Stack
} from '@chakra-ui/react';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

export const RadioField = ({
  name,
  label,
  options,
  direction = 'row',
  disabled = false,
  ...restProps
}) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error }
  } = useController({
    name,
    control
  });
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        onChange={setValue}
        value={value}
        isDisabled={disabled}
        {...restProps}
      >
        <Stack direction={direction}>
          {options.map((opt) => (
            <Radio
              key={opt.value}
              value={opt.value}
            >
              {opt.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
