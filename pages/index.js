import { Box, Button } from '@chakra-ui/react';
import { TextInputField } from '@components/form-controls/text-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().max(255).required('Username is required'),
  password: yup.string().max(255).required('Password is required')
});

export default function Home() {
  const formMethods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      username: ''
    }
  });
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = formMethods;

  const handleLogin = handleSubmit(async (values) => {
    console.log('login', values);
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleLogin}>
        <TextInputField
          name="username"
          label="Username"
          disabled={isSubmitting}
        />
        <TextInputField
          name="password"
          label="Password"
          type="password"
          disabled={isSubmitting}
        />
        <Box py={2}>
          <Button
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
}
