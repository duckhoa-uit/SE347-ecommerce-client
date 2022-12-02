import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

export const SelectField = ({
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
      <Select
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        isDisabled={disabled}
        {...restProps}
      />
      {options.map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
        >
          {opt.label}
        </option>
      ))}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
