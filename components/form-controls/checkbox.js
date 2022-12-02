import { Checkbox, FormControl, FormErrorMessage } from '@chakra-ui/react';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

export const CheckboxField = ({ name, label, disabled = false, className = '', ...restProps }) => {
  const { control } = useFormContext();
  const {
    field: { ref, value, onChange, onBlur },
    fieldState: { error }
  } = useController({
    name,
    control
  });

  return (
    <FormControl isInvalid={!!error}>
      <Checkbox
        ref={ref}
        isChecked={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        isDisabled={disabled}
        isInvalid={!!error}
        {...restProps}
      >
        {label}
      </Checkbox>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
