import {
  Stack,
  Field,
  Input,
  Button,
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '../../../shared/components/PasswordInput/password-input';
import { LoginContainer } from './Login.container';

interface FormValues {
  username: string;
  password: string;
}

export const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handler = LoginContainer();
  const onSubmit = handleSubmit((data) => {
    handler.dummyHandleLogin(data.username, data.password);
  });

  return (
    <Flex minH='90vh' align='center' justify='center' p='4'>
      <Box bg='white' p='8' rounded='lg' shadow='md' width='full' maxW='sm'>
        <Stack m='2'>
          <Box textAlign='center' mb='5'>
            <Heading size='lg' fontWeight='bold'>
              Welcome Back
            </Heading>
            <Text fontSize='sm' color='gray.500'>
              Please login to your account
            </Text>
          </Box>

          <form onSubmit={onSubmit}>
            <Stack gap='4'>
              <Field.Root invalid={!!errors.username}>
                <Field.Label>
                  Username <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  {...register('username')}
                  css={{ '--focus-color': 'blue' }}
                />
                <Field.ErrorText>Username field is required</Field.ErrorText>
                <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={!!errors.password}>
                <Field.Label>
                  Password <Field.RequiredIndicator />
                </Field.Label>
                <PasswordInput
                  {...register('password')}
                  css={{ '--focus-color': 'blue' }}
                />
                <Field.ErrorText>Password field is required</Field.ErrorText>
                <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
              </Field.Root>

              <Button type='submit' width='full' mt='5' colorPalette='blue'>
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};
