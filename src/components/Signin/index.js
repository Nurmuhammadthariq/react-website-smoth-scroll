import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './SignInElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Dolla</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your accaount</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput htmlFor='password' required />
              <FormButton type='button'>Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
