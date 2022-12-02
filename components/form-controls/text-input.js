import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

export const TextInputField = ({
  name,
  label,
  disabled = false,
  type = 'text',
  placeholder = '',
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
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isDisabled={disabled}
        placeholder={placeholder}
        {...restProps}
      />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
